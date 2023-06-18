import React from 'react'
import SavingsImg from '../assets/savings-img.png'
import LoanImg from "../assets/loan-img.jpg"

function Services() {
    let card_1 = document.getElementById('card-1')
    let card_2 = document.getElementById('card-2')
    let card_3 = document.getElementById('card-3')

    function savings(){
        card_1 = document.getElementById('card-1').style.display = ""
        card_2 = document.getElementById('card-2').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "none"
    }

    function loan(){
        card_2 = document.getElementById('card-2').style.display = "flex"
        card_1 = document.getElementById('card-1').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "none"
    }

    function purchase(){
        card_1 = document.getElementById('card-1').style.display = "none"
        card_2 = document.getElementById('card-2').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "flex"
    }
   
  return (
   <div className=''>
        <p className='font-bold text-3xl p-4 text-center'>Our Services</p>
        {/**Tab menu */}
        <div className='px-4 flex items-center gap-2 justify-center'>
            <div className='bg-black text-white text-xs cursor-pointer py-2 px-4 w-[120px] text-center rounded-lg' onClick={savings}>Savings</div>
            <div className='bg-black text-white text-xs cursor-pointer py-2 px-4 w-[120px] text-center rounded-lg' onClick={loan}>Loan</div>
            <div className='bg-black text-white text-xs cursor-pointer py-2 px-4 w-[120px] text-center rounded-lg' onClick={purchase}>Purchases</div>
        </div>
        {/**horizontal line */}
        <div className='w-[60%] m-auto mt-4'>
            <hr></hr>
        </div>
        {/**tab card 1 */}
        <div className='p-4 w-[100%] md:flex  m-auto' id='card-1'>
            <div>
                <img className='services-img' src={SavingsImg} alt=""></img>
            </div>
            <div className='md:pl-4'>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] sm:m-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div>
                <button className='bg-black text-white py-2 px-4 w-fit text-center rounded-lg mt-4'>Start Saving</button>
            </div>
            </div>
        </div>
         {/**tab card 2 */}
        <div className='p-4 w-[100%] m-auto hidden' id='card-2'>
            <div>
                <img className='services-img' src={LoanImg} alt=""></img>
            </div>
            <div className='md:pl-4'>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div>
                <button className='bg-black text-white py-2 px-4 w-[120px] text-center rounded-lg mt-4'>Get a Loan</button>
            </div>
            </div>
        </div>

        <div className='p-4 w-[100%] m-auto hidden' id='card-3'>
            <div>
                <img className='services-img' src={SavingsImg} alt=""></img>
            </div>
            <div className='md:pl-4'>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div>
                <button className='bg-black text-white py-2 px-4 w-[fit] text-center rounded-lg mt-4'>Make Purchase</button>
            </div>
            </div>
        </div>
        
   </div>
  )
}

export default Services