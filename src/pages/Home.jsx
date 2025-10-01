import HeroSection from "@/components/LandingPage/HeroSection"
import KeyOfferings from "@/components/LandingPage/KeyOfferings"
import Industries from "@/components/LandingPage/IndustriesSection"
import FuelComparisonTable from "@/components/LandingPage/FuelComparisonTable"
import TeamMembers from "@/components/LandingPage/TeamMembersSection"
import RecognitionSection from "@/components/LandingPage/Recognition"
import FooterSection from "@/components/LandingPage/Footer"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <KeyOfferings/>
      <Industries/>
      <FuelComparisonTable/>
      <TeamMembers/>  
      <RecognitionSection/>
      <FooterSection/>
    </div>
  )
}

export default Home