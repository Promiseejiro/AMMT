import React from 'react'
import Header from '../components/Header'
import Showcase from './components/Showcase'
import Testimonial from './components/Testimonial'
import Offers from './components/Offer'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Offers/>
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home