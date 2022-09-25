import React from 'react'
import AboutSection from '../Componets/AboutSection'
import Footer from '../Componets/Footer'
import HomeSection from '../Componets/HomeSection'
import OurPinksale from '../Componets/OurPinksale'
import QuestionsSection from '../Componets/QuestionsSection'
import RoadmapSection from '../Componets/RoadmapSection'
import TeamSection from '../Componets/TeamSection'
import TitleSection from '../Componets/TitleSection'

function Home() {
  return (
    <div className='relative'>
        <HomeSection/>
        <AboutSection/>
        <div className='md:mb-10'>
          <TitleSection title='with doge stars we are all Famous' />
        </div>
        <TeamSection/>
        <OurPinksale />
        <RoadmapSection />
        <QuestionsSection />
        <Footer />
    </div>
  )
}

export default Home