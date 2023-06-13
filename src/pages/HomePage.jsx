import React from 'react'
import Services from '../components/Services'

function HomePage() {
  return (
    <div className=''>
    <div className='bg-[url(./assets/mobile-hero.png)] md:bg-[url(./assets/Hero-Background.png)] h-[50vh] w-[100%] bg-cover bg-no-repeat text-white'>
      <p className='hero-heading pt-[40%] md:pt-[12%] lg:pt-[8%] w-[20ch] m-auto mb-4'>
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