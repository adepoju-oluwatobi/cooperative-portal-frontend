import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Register() {
    let regInfo = document.getElementById('reg-info')
    let regInfoCloseBtn = document.getElementById('reg-info-close-btn')

    function regInfoClose(){
        regInfo = document.getElementById('reg-info').style.display = "none"
        regInfoCloseBtn = document.getElementById('reg-info-close-btn').style.display = "none"
    }
  return (
   <div>
     <div className='bg-[url(./assets/login-background-mobile.png)] bg-contain h-full w-full'>
        <Header />
        <div>
                <div id='reg-info' className='container bg-white w-[300px] m-auto mt-4 text-xs flex justify-center items-center'>
                    <p>
                        Please understand that you are to pay a sum of 1000 naira to this <Link className='text-blue-500' to='/account'>account</Link> before proceeding.
                    </p>
                    <div id='reg-info-close-btn' onClick={regInfoClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        <div className='mt-4'>
        <p className='heading text-center'>Register</p>
        <form action="" className='text-center'>
            <div> <input type="text" placeholder='Enter your First name' /></div>
            <div> <input type="text" placeholder='Enter your last name' /></div>
            <div><input type="email" placeholder='Enter your email' /></div>
            <div> <input type="number" placeholder='saving amount' /></div>
            <label className='text-white' htmlFor="proof of payment">Upload proof of payment</label>
            <div> <input className='w-[200px] text-white text-xs' type="file" placeholder='Upload' /></div>
           <div> <button className='primary-btn'>Register</button></div>

           <div className='text-xs mt-4'>
           <p className='text-white'>Already a member?<Link className='text-blue-500' to='/login'>Login here</Link></p>
         </div>
        </form>
        </div>
    </div>
    <Footer />
   </div>
  )
}

export default Register