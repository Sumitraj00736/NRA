import React from 'react'
import HeroSlider from "../components/specific/HeroSlider.jsx"
import News from '../components/Updatess/News/News.jsx'
import OurTeam from '../components/OurTeam/OurTeam.jsx'


const Home = () => {
  return (
    <>
    <div className='overflow-x-hidden '>
      <HeroSlider/>
      <News/>
      <OurTeam/>
    </div>
    </>
  )
}

export default Home
