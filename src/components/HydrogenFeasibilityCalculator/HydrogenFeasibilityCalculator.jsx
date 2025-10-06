import React, { useState, useEffect } from "react";
import { DollarSign, Calculator, Leaf, CheckCircle2, XCircle, Sprout } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  dailyConsumption: z
    .union([
      z.literal(""),
      z.coerce.number().nonnegative({ message: "Must be 0 or greater" }),
    ])
    .optional(),
  analysisPeriod: z
    .union([
      z.literal(""),
      z.coerce.number().nonnegative({ message: "Must be 0 or greater" }),
    ])
    .optional(),
});

const HydrogenFeasibilityCalculator = () => {
  const [results, setResults] = useState({
    diesel: { capex: 0, opex: 0, co2: 0, totalCost: 0 },
    hydrogen: { capex: 0, opex: 0, co2: 0, totalCost: 0 },
    summary: { costSavings: 0, co2Avoided: 0 },
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dailyConsumption: "",
      analysisPeriod: "",
    },
  });

  const formatNumber = (num) =>
    Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const calculateFeasibility = (values) => {
    const eDaily = parseFloat(values.dailyConsumption) || 0;
    const tYears = parseFloat(values.analysisPeriod) || 0;

    if (eDaily <= 0 || tYears <= 0) {
      setResults({
        diesel: { capex: 0, opex: 0, co2: 0, totalCost: 0 },
        hydrogen: { capex: 0, opex: 0, co2: 0, totalCost: 0 },
        summary: { costSavings: 0, co2Avoided: 0 },
      });
      return;
    }

    // Diesel Calculations
    const capexDiesel = eDaily * 0.0019;
    const opexDiesel = eDaily * 0.111;
    const co2EmissionsDiesel = eDaily * 0.9;
    const totalCostDiesel = opexDiesel * tYears + capexDiesel;

    // Hydrogen Calculations
    const capexHydrogen = eDaily * 0.0275;
    const opexHydrogen = eDaily * 0.0671;
    const co2EmissionsHydrogen = 0;
    const totalCostHydrogen = opexHydrogen * tYears + capexHydrogen;

    const costSavings = (opexDiesel - opexHydrogen) * tYears;
    const co2Avoided = (co2EmissionsDiesel * 365 * tYears) / 1000;

    setResults({
      diesel: {
        capex: capexDiesel,
        opex: opexDiesel,
        co2: co2EmissionsDiesel,
        totalCost: totalCostDiesel,
      },
      hydrogen: {
        capex: capexHydrogen,
        opex: opexHydrogen,
        co2: co2EmissionsHydrogen,
        totalCost: totalCostHydrogen,
      },
      summary: { costSavings, co2Avoided },
    });
  };

  useEffect(() => {
    calculateFeasibility(form.getValues());
  }, []);

  const dieselProsCons = [
    { text: "Higher operational costs", isCon: true },
    { text: "Significant CO2 emissions", isCon: true },
    { text: "Noise pollution", isCon: true },
    { text: "Air quality impact", isCon: true },
    { text: "Lower initial investment", isCon: false },
  ];

  const hydrogenProsCons = [
    { text: "Zero carbon emissions", isCon: false },
    { text: "Lower operational costs", isCon: false },
    { text: "Silent operation", isCon: false },
    { text: "Clean, no local pollution", isCon: false },
    { text: "Higher initial investment", isCon: true },
  ];

  return (
    <div className="min-h-fit text-gray-200 font-sans flex items-center justify-center p-4">
      <main className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl py-6 md:p-10 h-full">
        <div className="text-center mb-10 flex flex-col gap-5">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hydrogen{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Feasibility Calculator
            </span>
          </h1>
          <p className="mt-2 text-gray-400 text-wrap md:w-[60%] mx-auto">
            Compare the cost, emissions, and efficiency of Diesel Devices versus Hydrogen Devices
            for your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <div className="rounded-lg p-6 md:p-8 bg-[rgba(255,255,255,0.05)] h-fit border border-gray-800">
              <div className="flex items-center mb-5 gap-3">
                <Calculator color="cyan" />
                <h2 className="text-xl font-semibold text-white">Input Parameters</h2>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) => calculateFeasibility(data))}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="dailyConsumption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Daily Energy Consumption (kWh)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 100"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="border-gray-600"
                          />
                        </FormControl>
                        <FormDescription>
                          Average daily energy consumption in kilowatt-hours.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="analysisPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Analysis Period (Years)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g., 10"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="border-gray-600"
                          />
                        </FormControl>
                        <FormDescription>
                          Time period for cost and savings analysis.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:bg-cyan-500 text-black px-6 py-5 rounded-full font-semibold transition-all duration-200 cursor-pointer"
                  >
                    Calculate Feasibility
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <div className="lg:col-span-2">

            <div className="space-y-6">
              <div className="bg-[#FFFFFF0D] rounded-lg border border-gray-800 p-6 md:p-8">
                <div className="flex items-center mb-5 gap-3">
                    <Sprout color="cyan"/>
                    <h2 className="text-xl font-semibold text-white">Comparison Results</h2>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="py-2 px-2 md:px-4 font-semibold text-gray-300">Metric</th>
                      <th className="py-2 px-2 md:px-4 font-semibold text-gray-300 text-right">
                        Diesel Devices
                      </th>
                      <th className="py-2 px-2 md:px-4 font-semibold text-gray-300 text-right">
                        Hydrogen Devices
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2 md:px-4 text-gray-400">CAPEX (Lakhs/year)</td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-mono">
                        {formatNumber(results.diesel.capex)}
                      </td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-mono">
                        {formatNumber(results.hydrogen.capex)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2 md:px-4 text-gray-400">OPEX (Lakhs/year)</td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-mono">
                        {formatNumber(results.diesel.opex)}
                      </td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-mono">
                        {formatNumber(results.hydrogen.opex)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-2 md:px-4 text-gray-400">CO2 Emissions (kg/day)</td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-mono">
                        {formatNumber(results.diesel.co2)}
                      </td>
                      <td className="py-3 px-2 md:px-4 text-green-400 text-right font-mono">
                        {formatNumber(results.hydrogen.co2)}{" "}
                        <span className="text-xs text-gray-500">(Zero Emissions)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 md:px-4 text-gray-400 font-semibold">
                        Total Cost ({form.getValues("analysisPeriod") || 0} years) (Lakhs)
                      </td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-bold font-mono text-lg">
                        {formatNumber(results.diesel.totalCost)}
                      </td>
                      <td className="py-3 px-2 md:px-4 text-white text-right font-bold font-mono text-lg">
                        {formatNumber(results.hydrogen.totalCost)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-900/50 border border-cyan-700 rounded-lg p-5 flex items-start space-x-4 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="bg-cyan-500/20 p-2 rounded-full">
                    <DollarSign className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Cost Savings</h3>
                    <p className="text-3xl font-bold text-cyan-300 mt-1">
                      {formatNumber(results.summary.costSavings)}
                      <span className="text-xl ml-1">Lakhs</span>
                    </p>
                    <p className="text-sm text-cyan-200/80 mt-1">
                      Operational savings over {form.getValues("analysisPeriod") || 0} years
                    </p>
                  </div>
                </div>

                <div className="bg-green-900/50 border border-green-700 rounded-lg p-5 flex items-start space-x-4 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <Leaf className="text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">CO2 Emissions Avoided</h3>
                    <p className="text-3xl font-bold text-green-300 mt-1">
                      {formatNumber(results.summary.co2Avoided)}
                      <span className="text-xl ml-1">Tons</span>
                    </p>
                    <p className="text-sm text-green-200/80 mt-1">
                      Reduced carbon emissions over {form.getValues("analysisPeriod") || 0} years
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 rounded-xl bg-[rgba(255,255,255,0.05)] border border-gray-800 hover:border-cyan-400 transition duration-300 transform hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold text-white mb-3">Diesel Devices</h3>
                  <ul className="space-y-2">
                    {dieselProsCons.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        {item.isCon ? (
                          <XCircle className="mr-2 text-red-400" size={18} />
                        ) : (
                          <CheckCircle2 className="mr-2 text-green-400" size={18} />
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 md:p-8 rounded-xl bg-[rgba(255,255,255,0.05)] border border-gray-800 hover:border-cyan-400 transition duration-300 transform hover:scale-[1.02]">
                  <h3 className="text-lg font-semibold text-white mb-3">Hydrogen Devices</h3>
                  <ul className="space-y-2">
                    {hydrogenProsCons.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        {item.isCon ? (
                          <XCircle className="mr-2 text-red-400" size={18} />
                        ) : (
                          <CheckCircle2 className="mr-2 text-green-400" size={18} />
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HydrogenFeasibilityCalculator;
