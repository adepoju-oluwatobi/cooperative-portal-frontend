import React from 'react'
import SavingsImg from '../assets/savings-img.png'
import LoanImg from "../assets/loan-img.jpg"

function ServicesMobile() {
    let Mcard_1 = document.getElementById('Mcard-1')
    let Mcard_2 = document.getElementById('Mcard-2')
    let Mcard_3 = document.getElementById('Mcard-3')
    let Ms = document.getElementById('Ms')
    let Ml = document.getElementById('Ml')
    let Mp = document.getElementById('Mp')

    function savings(){
        Mcard_1 = document.getElementById('Mcard-1').style.display = "initial"
        Mcard_2 = document.getElementById('Mcard-2').style.display = "none"
        Mcard_3 = document.getElementById('Mcard-3').style.display = "none"
        Ms = document.getElementById('Ms').style.background = "#8EAC90"
        Ms = document.getElementById('Ms').style.color = "white"
        Ml = document.getElementById('Ml').style.background = "none"
        Ml = document.getElementById('Ml').style.color = "black"
        Mp = document.getElementById('Mp').style.background = "none"
        Mp = document.getElementById('Mp').style.color = "black"
       

    }

    function loan(){
        Mcard_2 = document.getElementById('Mcard-2').style.display = "initial"
        Mcard_1 = document.getElementById('Mcard-1').style.display = "none"
        Mcard_3 = document.getElementById('Mcard-3').style.display = "none"
        Ms = document.getElementById('Ms').style.background = "none"
        Ms = document.getElementById('Ms').style.color = "black"
        Ml = document.getElementById('Ml').style.background = "#8EAC90"
        Ml = document.getElementById('Ml').style.color = "white"
        Mp = document.getElementById('Mp').style.background = "none"
        Mp = document.getElementById('Mp').style.color = "black"
    }

    function purchase(){
        Mcard_1 = document.getElementById('Mcard-1').style.display = "none"
        Mcard_2 = document.getElementById('Mcard-2').style.display = "none"
        Mcard_3 = document.getElementById('Mcard-3').style.display = "initial"
        Ms = document.getElementById('Ms').style.background = "none"
        Ms = document.getElementById('Ms').style.color = "black"
        Ml = document.getElementById('Ml').style.background = "none"
        Ml = document.getElementById('Ml').style.color = "black"
        Mp = document.getElementById('Mp').style.background = "#8EAC90"
        Mp = document.getElementById('Mp').style.color = "white"
       
    }
  return (
    <div className='md:hidden'>
        <p className='mt-4 font-bold text-center text-2xl'>Services</p>

        <div className='flex gap-4 justify-center mt-2'>
            <div className='service-tab-title text-white bg-black' 
            id='Ms' onClick={savings}>Savings</div>
            <div className='service-tab-title text-black border-b border-black' id='Ml' onClick={loan}>Loan</div>
            <div className='service-tab-title text-black border-b border-black' id='Mp' onClick={purchase}>Purchases</div>
        </div>

        <div className='p-4 md:flex justify-center' id='Mcard-1'>
            <div><img className='services-img' src={SavingsImg} alt="" /></div>
            <div className='pl-4 flex flex-col justify-between items-center md:items-start gap-4'>
                <div>
                    <p className='w-[40ch] text-center md:text-left text-xs md:text-sm mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem similique, tempora nam quia numquam mollitia doloribus perspiciatis magni debitis vero, deserunt officia. Fuga esse cum possimus voluptates? Non, provident.</p>
                </div>
                <div><button className='service-tab-title bg-black text-white'>Start Savings</button></div>
            </div>
        </div>

        <div className='p-4 justify-center hidden' id='Mcard-2'>
            <div><img className='services-img'  src={LoanImg} alt="" /></div>
            <div className='pl-4 flex flex-col justify-between items-center md:items-start gap-4'>
                <div>
                    <p className='w-[40ch] text-center md:text-left text-xs md:text-sm mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur rem similique, tempora nam quia numquam mollitia doloribus perspiciatis magni debitis vero, deserunt officia. Fuga esse cum possimus voluptates? Non, provident.</p>
                </div>
                <div><button className='service-tab-title bg-black text-white'>Get a Loan</button></div>
            </div>
        </div>


        <div className='p-4 justify-center flex-row hidden' id='Mcard-3'>
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

export default ServicesMobile