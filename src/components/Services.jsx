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
        card_1 = document.getElementById('card-1').style.display = ""
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
        card_2 = document.getElementById('card-2').style.display = "flex"
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
        card_3 = document.getElementById('card-3').style.display = "flex"
        s = document.getElementById('s').style.background = "none"
        s = document.getElementById('s').style.color = "black"
        l = document.getElementById('l').style.background = "none"
        l = document.getElementById('l').style.color = "black"
        p = document.getElementById('p').style.background = "#8EAC90"
        p = document.getElementById('p').style.color = "white"
       
    }
  return (
    <div className='hidden md:block'>
        <p className='md:text-3xl md:mt-4 font-bold text-center'>Services</p>

        <div className='flex gap-4 justify-center mt-2'>
            <div className='service-tab-title text-white bg-black cursor-pointer' 
            id='s' onClick={savings}>Savings</div>
            <div className='service-tab-title text-black border-b border-black cursor-pointer' id='l' onClick={loan}>Loan</div>
            <div className='service-tab-title text-black border-b border-black cursor-pointer' id='p' onClick={purchase}>Purchases</div>
        </div>

        <div className='p-4 md:flex justify-center' id='card-1'>
            <div><img className='services-img' src={SavingsImg} alt="" /></div>
            <div className='pl-4 flex flex-col justify-between items-center md:items-start gap-4'>
                <div>
                    <p className='w-[40ch] text-center md:text-left text-xs md:text-sm mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem similique, tempora nam quia numquam mollitia doloribus perspiciatis magni debitis vero, deserunt officia. Fuga esse cum possimus voluptates? Non, provident.</p>
                </div>
                <div><button className='service-tab-title bg-black text-white'>Start Savings</button></div>
            </div>
        </div>

        <div className='p-4 justify-center hidden' id='card-2'>
            <div><img className='services-img'  src={LoanImg} alt="" /></div>
            <div className='pl-4 flex flex-col justify-between items-center md:items-start gap-4'>
                <div>
                    <p className='w-[40ch] text-center md:text-left text-xs md:text-sm mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem similique, tempora nam quia numquam mollitia doloribus perspiciatis magni debitis vero, deserunt officia. Fuga esse cum possimus voluptates? Non, provident.</p>
                </div>
                <div><button className='service-tab-title bg-black text-white'>Get a Loan</button></div>
            </div>
        </div>


        <div className='p-4 justify-center flex-row hidden' id='card-3'>
            <div><img className='services-img' src={SavingsImg} alt="" /></div>
            <div className='pl-4 flex flex-col justify-between items-center md:items-start gap-4'>
                <div>
                    <p className='w-[40ch] text-center md:text-left text-xs md:text-sm mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem similique, tempora nam quia numquam mollitia doloribus perspiciatis magni debitis vero, deserunt officia. Fuga esse cum possimus voluptates? Non, provident.</p>
                </div>
                <div><button className='service-tab-title bg-black text-white hover:bg-green-700'>Make a Purchase</button></div>
            </div>
        </div>


    </div>
  )
}

export default Services