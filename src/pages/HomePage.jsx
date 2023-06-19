import React from 'react'
import Services from '../components/Services'
import Header from '../components/Header'

function HomePage() {
  return (
    <div className=''>
      <Header />
    <div className='bg-[url(./assets/mobile-hero.png)] md:bg-[url(./assets/Hero-Background.png)] h-[50vh] md:h-[80vh] w-[100%] bg-cover bg-no-repeat text-white'>
      <p className='hero-heading pt-[10%] md:pt-[15%] lg:pt-[] w-[20ch] m-auto mb-4'>
      Enrich your future 
      with our flexible saving plan
      </p>

      <p className='hero-desc pb-2'>
      We understand the difficulty in saving in an economy that is not so pocket friendly and that why we are here. Choose from our flexible plans to begin saving for the future.
      </p>

      <p className='hero-btn cursor-pointer'>Become a Member</p>
    </div>
    <Services />
    </div>
  )
}

export default HomePage