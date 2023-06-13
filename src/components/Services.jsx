import React from 'react'
import SavingsImg from '../assets/savings-img.png'

function Services() {
  return (
    <div className='p-4 '>
        <p className='font-bold text-3xl mb-2'>Our Services</p>
       <div className='flex justify-center items-center'>
         {/* CARD ONE */}
         <div className='mb-10'>
           <div className='flex justify-evenly'>
           <p className='hover:bg-[#8EAC90] w-fit px-8 py-2 hover:text-white rounded-lg mb-2 cursor-pointer'>Savings</p>
           <p className='hover:bg-[#8EAC90] w-fit px-8 py-2 hover:text-white rounded-lg mb-2 cursor-pointer'>Savings</p>
           <p className='hover:bg-[#8EAC90] w-fit px-8 py-2 hover:text-white rounded-lg mb-2 cursor-pointer'>Savings</p>
           </div>
            <div>
                <img src={SavingsImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum voluptate iste, deserunt blanditiis aut harum nihil mollitia earum voluptatem obcaecati saepe distinctio sequi! Facere sint velit eum dicta similique?</p>
                <button className='bg-black w-fit px-8 py-2 text-white rounded-lg mb-2 mt-2'>Start Saving</button>
            </div>
        </div>
        {/** END OF CARD */}

         {/* CARD ONE */}
         <div className='w-[100%] h-auto m-auto hidden'>
            <div>
                <img src={SavingsImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum voluptate iste, deserunt blanditiis aut harum nihil mollitia earum voluptatem obcaecati saepe distinctio sequi! Facere sint velit eum dicta similique?</p>
                <button className='bg-black w-fit px-8 py-2 text-white rounded-lg mb-2 mt-2'>Get a loan</button>
            </div>
        </div>
        {/** END OF CARD */}

         {/* CARD ONE */}
         <div className='w-[100%] h-auto m-auto hidden'>
            <div>
                <img src={SavingsImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum voluptate iste, deserunt blanditiis aut harum nihil mollitia earum voluptatem obcaecati saepe distinctio sequi! Facere sint velit eum dicta similique?</p>
                <button className='bg-black w-fit px-8 py-2 text-white rounded-lg mb-2 mt-2'>Make a purchase</button>
            </div>
        </div>
        {/** END OF CARD */}
       </div>
    </div>
  )
}

export default Services