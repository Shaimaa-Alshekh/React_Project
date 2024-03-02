import React from 'react'
import Navbar from '../component _file/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Hero from '../pages/hero/Hero'
import Footer from '../component _file/footer/Footer'

function Root() {
  return (
    <>
    <Navbar />
    <Hero />
    <Outlet />
    <Footer/>
    </>

)
}

export default Root