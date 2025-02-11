import React from 'react'
import HeroSlider from "../components/specific/HeroSlider.jsx"
import HeroCard from "../components/specific/HeroCard.jsx";
import News from '../components/Updatess/News/News.jsx'
import Profile from '../components/Profile/Profile.jsx'
import OurPartners from '../components/OurPartners/OurPartners.jsx';


const Home = () => {
  return (
    <>
    <div className='overflow-x-hidden -mt-16  '>
      <HeroSlider/>
      <HeroCard/>
      <Profile/>
      <News/>
      <OurPartners/>
    </div>
    </>
  )
}

export default Home
