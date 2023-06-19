import React from 'react'
import SavingsImg from '../assets/savings-img.png'
import LoanImg from "../assets/loan-img.jpg"

function Services() {
    let card_1 = document.getElementById('card-1')
    let card_2 = document.getElementById('card-2')
    let card_3 = document.getElementById('card-3')
    let s = document.getElementById('s')
    let l = document.getElementById('l')
    let p = document.getElementById('p')

    function savings(){
        card_1 = document.getElementById('card-1').style.display = "initial"
        card_2 = document.getElementById('card-2').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "none"
        s = document.getElementById('s').style.background = "#8EAC90"
        s = document.getElementById('s').style.color = "white"
        l = document.getElementById('l').style.background = "none"
        l = document.getElementById('l').style.color = "black"
        p = document.getElementById('p').style.background = "none"
        p = document.getElementById('p').style.color = "black"
       

    }

    function loan(){
        card_2 = document.getElementById('card-2').style.display = "initial"
        card_1 = document.getElementById('card-1').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "none"
        s = document.getElementById('s').style.background = "none"
        s = document.getElementById('s').style.color = "black"
        l = document.getElementById('l').style.background = "#8EAC90"
        l = document.getElementById('l').style.color = "white"
        p = document.getElementById('p').style.background = "none"
        p = document.getElementById('p').style.color = "black"
    }

    function purchase(){
        card_1 = document.getElementById('card-1').style.display = "none"
        card_2 = document.getElementById('card-2').style.display = "none"
        card_3 = document.getElementById('card-3').style.display = "initial"
        s = document.getElementById('s').style.background = "none"
        s = document.getElementById('s').style.color = "black"
        l = document.getElementById('l').style.background = "none"
        l = document.getElementById('l').style.color = "black"
        p = document.getElementById('p').style.background = "#8EAC90"
        p = document.getElementById('p').style.color = "white"
       
    }
   
  return (
  <div>
     <div className='md:hidden'>
    {/**Mobile view */}
        <p className='font-bold text-3xl p-4 text-center'>Our Services</p>
        {/**Tab menu */}
        <div className='px-4 flex items-center gap-2 justify-center'>
            <div id='s' className='bg-[#8EAC90] text-white text-xs cursor-pointer py-2 px-4 w-[120px] text-center rounded-lg' onClick={savings}>Savings</div>
            <div id='l' className=' text-black text-xs cursor-pointer py-2 px-4 w-[120px] text-center rounded-lg' onClick={loan}>Loan</div>
            <div id='p' className=' text-black text-xs cursor-pointer py-2 px-4 w-[120px] text-center rounded-lg' onClick={purchase}>Purchases</div>
        </div>
        {/**horizontal line */}
        <div className='w-[60%] m-auto mt-4'>
            <hr></hr>
        </div>
        {/**tab card 1 */}
        <div className='p-4 w-[100%] m-auto' id='card-1'>
            <div>
                <img className='services-img' src={SavingsImg} alt=""></img>
            </div>
            <div className=''>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div className='w-fit m-auto'>
                <button className='bg-black text-white py-2 px-4 w-[fit] text-center rounded-lg mt-4 ml-'>Start Saving</button>
            </div>
            </div>
        </div>
         {/**tab card 2 */}
         <div className='p-4 w-[100%] m-auto hidden' id='card-2'>
            <div>
                <img className='services-img' src={LoanImg} alt=""></img>
            </div>
            <div className=''>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div className='w-fit m-auto'>
                <button className='bg-black text-white py-2 px-4 w-[fit] text-center rounded-lg mt-4 ml-'>Get a loan</button>
            </div>
            </div>
        </div>
        {/**tab card 3 */}
        <div className='p-4 w-[100%] m-auto hidden' id='card-3'>
            <div>
                <img className='services-img' src={SavingsImg} alt=""></img>
            </div>
            <div className=''>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div className='w-fit m-auto'>
                <button className='bg-black text-white py-2 px-4 w-[fit] text-center rounded-lg mt-4 ml-'>Make a Purchase</button>
            </div>
            </div>
        </div>
   </div>
    {/**End of mobile view */}

             {/**Begining of medium view */}
             <div className='hidden md:block'>
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

       <div>
        {/**Card 1 */}
       <div className='p-4 w-[100%] flex justify-center' id='card-1'>
            <div>
                <img className='services-img' src={SavingsImg} alt=""></img>
            </div>
            <div className=''>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto pl-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div className='w-fit pl-4 mt-4'>
                <button className='bg-black text-white py-2 px-4 w-[fit] text-center rounded-lg'>Start Saving</button>
            </div>
            </div>
        </div>

        {/**card 2 */}
        <div className='p-4 w-[100%] justify-center hidden' id='card-2'>
            <div>
                <img className='services-img' src={SavingsImg} alt=""></img>
            </div>
            <div className=''>
            <div className='mt-4'>
                <p className='text-xs w-[50ch] m-auto pl-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, dolorum? Iure, dolorum. Enim provident iure vel laudantium, exercitationem dolore odit eaque quis hic temporibus at incidunt earum eum quidem itaque.
                </p>
            </div>
            <div className='w-fit pl-4 mt-4'>
                <button className='bg-black text-white py-2 px-4 w-[fit] text-center rounded-lg'>Get a Loan</button>
            </div>
            </div>
        </div>
       </div>


             </div>
  </div>
  )
}

export default Services