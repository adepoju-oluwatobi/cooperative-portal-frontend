import React, { useState, useContext } from 'react'
import CreatedContext, { coperativeUserContext } from '../components/Context'
import Benefits from '../components/Benefits'
import Header from '../components/Header';
import ProfilePics from '../assets/dummy-off1.png'
import Bell from '../assets/bell.svg'
import CareService from '../assets/customer-care.svg'
import Settings from '../assets/settings.svg'
import Eye from '../assets/eye.svg'
import Footer from '../components/Footer';

function Dashboard() {
  const { user } = useContext(coperativeUserContext);
  const sharedData = useContext(CreatedContext)

  //handles the values of finaces in dashboard
  const [balance, setBalance] = useState("N100,000.00");
  const [loanAmt, setLoanAmt] = useState("N200,000.00")
  const [monthlySav, setMonthlySav] = useState("N20,000.00")

  let bal = document.getElementById('balance');
  let loan = document.getElementById('loan');
  let savings = document.getElementById('savings');
  let hideBal = document.getElementById('hide');
  let showBal = document.getElementById('show');


  //function to hide financial figure
  function hide() {
    bal = document.getElementById('balance').innerHTML = "xxxxxxxxxxxxxx"
    loan = document.getElementById('loan').innerHTML = "xxxxxxxxxxxxxx"
    savings = document.getElementById('savings').innerHTML = "xxxxxxxxxxxxxx"
    hideBal = document.getElementById('hide').style.display = "none"
    showBal = document.getElementById('show').style.display = "block"

  }
  //function to show financial figures
  function show() {
    bal = document.getElementById('balance').innerHTML = balance
    loan = document.getElementById('loan').innerHTML = loanAmt
    savings = document.getElementById('savings').innerHTML = monthlySav
    hideBal = document.getElementById('hide').style.display = "block"
    showBal = document.getElementById('show').style.display = "none"
  }
  return (
    <div>
      <Header />
      <div className='flex justify-center'>
        <div className='w-[300px] md:w-[600px] h-auto py-2'>


          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img className='w-10 md:w-20' src={ProfilePics} alt="" />
              <p className='md:text-xl'>Hello, {user?.data.users} <span className='font-bold'>{sharedData}</span></p>
            </div>
            <div className='flex items-start cursor-pointer gap-3 pr-4'>
              <img className='w-5' src={Bell} alt="" />
              <img className='w-5' src={CareService} alt="" />
              <img className='w-5' src={Settings} alt="" />
            </div>
          </div>

          <div className='w-[100%] h-[180px] md:h-[280px] bg-[#6A2982] text-white rounded-xl px-4 py-2 md:p-4 flex flex-col md:gap-2'>
            <div className=''>
              <div className='flex items-center gap-2'>
                <p className='md:text-2xl'>Available Balance</p>
                <img className='w-3' src={Eye} alt=""
                  onClick={hide}
                  id='hide'
                />
                <img className='w-3 hidden' src={Eye} alt=""
                  onClick={show}
                  id='show'
                />

              </div>
              <p className='text-3xl md:text-5xl font-bold' id='balance'>{balance}</p>
            </div>
            <div>
              <p className='text-sm md:text-lg'>Loan Amount</p>
              <p className='font-bold md:text-2xl' id='loan'>{loanAmt}</p>
            </div>
            <div>
              <p className='text-sm md:text-lg'>Monthly Savings</p>
              <p className='font-bold md:text-2xl' id='savings'>{monthlySav}</p>
            </div>
          </div>

          <div className='flex justify-evenly mt-2'>
            <div className='bg-black text-white p-2 rounded-lg cursor-pointer'>
              <p className='text-[10px] md:text-base md:p-2'>Apply for loan</p>
            </div>
            <div className='bg-black text-white p-2 rounded-lg cursor-pointer'>
              <p className='text-[10px] md:text-base md:p-2'>Print Statement</p>
            </div>
            <div className='bg-black text-white p-2 rounded-lg cursor-pointer'>
              <p className='text-[10px] md:text-base md:p-2'>Make a purchase</p>
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