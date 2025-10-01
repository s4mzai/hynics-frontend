import HeroSection from "@/components/LandingPage/HeroSection"
import KeyOfferings from "@/components/LandingPage/KeyOfferings"
import Industries from "@/components/LandingPage/IndustriesSection"
import FuelComparisonTable from "@/components/LandingPage/FuelComparisonTable"
import TeamMembers from "@/components/LandingPage/TeamMembersSection"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <KeyOfferings/>
      <Industries/>
      <FuelComparisonTable/>
      <TeamMembers/>
    </div>
  )
}

export default Home