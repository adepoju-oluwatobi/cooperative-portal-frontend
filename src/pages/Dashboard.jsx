import React from 'react'
import Benefits from '../components/Benefits'
import Header from '../components/Header';
import ProfilePics from '../assets/dummy-off1.png'
import Bell from '../assets/bell.svg'
import CareService from '../assets/customer-care.svg'
import Settings from '../assets/settings.svg'
import Eye from '../assets/eye.svg'
import Footer from '../components/Footer';

function Dashboard() {
  return (
    <div>
       <Header />
       <div className='flex justify-center'>
        <div className='w-[300px] h-auto py-2'>


          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img className='w-10' src={ProfilePics} alt="" />
              <p>Hello, <span className='font-bold'>FirstName</span></p>
            </div>
            <div className='flex items-start cursor-pointer gap-3 pr-4'>
              <img className='w-5' src={Bell} alt="" />
              <img className='w-5' src={CareService} alt="" />
              <img className='w-5' src={Settings} alt="" />
            </div>
          </div>

          <div className='w-[100%] h-[180px] bg-[#6A2982] text-white rounded-xl px-4 py-2'>
            <div>
             <div className='flex items-center gap-2'>
               <p className=''>Available Balance</p>
               <img className='w-3' src={Eye} alt="" />
             </div>
              <p className='text-3xl font-bold'>N100,000.00</p>
            </div>
            <div>
              <p className='text-sm'>Loan Amount</p>
              <p className='font-bold'>N200,000.00</p>
            </div>
            <div>
              <p className='text-sm'>Monthly Savings</p>
              <p className='font-bold'>N20,000.00</p>
            </div>
          </div>

          <div className='flex justify-evenly mt-2'>
            <div className='bg-black text-white p-2 rounded-lg cursor-pointer'>
              <p className='text-[10px]'>Apply for loan</p>
            </div>
            <div className='bg-black text-white p-2 rounded-lg cursor-pointer'>
              <p className='text-[10px]'>Print Statement</p>
            </div>
            <div className='bg-black text-white p-2 rounded-lg cursor-pointer'>
              <p className='text-[10px]'>Make a purchase</p>
            </div>
          </div>
       </div>
       </div>
         <Benefits />
       <Footer />
    </div>
  )
}

export default Dashboard