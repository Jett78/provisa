import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Assist from '../Components/Assist'
import Contact from '../Components/Contact'
import Blogs from '../Components/Blogs'

const Home = () => {
  return (
   <main>
    <Header/>
    <Navbar/>
    <HeroSection/>
    <Assist/>
    <Contact/>
    <Blogs/>
   </main>
  )
}

export default Home