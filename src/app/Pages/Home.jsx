import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Assist from '../Components/Assist'
import Contact from '../Components/Contact'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import StudyAbroad from '../Components/StudyAbroad'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
   <main>
    <Header/>
    <Navbar/>
    <HeroSection/>
    <Assist/>
    <StudyAbroad/>
    <Testimonials/>
    <Contact/>
    <Blogs/>
    <Footer/>
   </main>
  )
}

export default Home