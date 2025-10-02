import AboutHynics from "@/components/AboutPage/AboutHynics"
import HynicsTimeline from "@/components/AboutPage/HynicsTimeline"
import OurAchievements from "@/components/AboutPage/OurAchievements"
import WhatDrivesUs from "@/components/AboutPage/WhatDrivesUs"
import TeamMembers from "@/components/LandingPage/TeamMembersSection"

const About = () => {
  return (
    <div>
      <AboutHynics/>
      <WhatDrivesUs/>
      <TeamMembers/>
      <HynicsTimeline/>
      <OurAchievements/>
    </div>
  )
}

export default About