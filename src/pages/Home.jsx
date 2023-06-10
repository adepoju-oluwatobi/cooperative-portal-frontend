import React from 'react'

function Home() {
  return (
   <div className=''>
     <div className='container bg-[url(mobile-hero.png)] md:bg-[url(Hero-Background.png)] h-[50vh] w-[100%] bg-cover bg-no-repeat text-white'>
      <p className='hero-heading mt-[20%] mb-2'>
      Enrich your future 
      with our flexible saving plan
      </p>

      <p className='hero-desc pb-2'>
      We understand the difficulty in saving in an economy that is not so pocket friendly and that why we are here. Choose from our flexible plans to begin saving for the future.
      </p>

      <p className='hero-btn'>Become a Member</p>
    </div>
   </div>
  )
}

export default Home