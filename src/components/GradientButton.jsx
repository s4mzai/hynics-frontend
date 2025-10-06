import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button";

const GradientButton = ({text,className,whereTo}) => {
  const navigate = useNavigate();
  return (
    <Button 
      className={`bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold py-5 px-8 rounded-full hover:bg-cyan-500 transition-transform transform cursor-pointer ${className}`}
      onClick={() => navigate(`${whereTo}`)}
    >

      {text}
    </Button>
  )
}

export default GradientButton