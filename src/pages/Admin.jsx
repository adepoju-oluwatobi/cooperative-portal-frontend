import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div className='bg-[url(login-background-mobile.png)] bg-cover h-[100vh] w-full'>
        <Header />
        <div className='mt-10'>
        <p className='heading text-center'>Admin Login</p>
        <form action="" className='text-center'>
            <div><input type="email" placeholder='Enter your email' /></div>
           <div> <input type="password" placeholder='Enter your password' /></div>
           <div> <button className='primary-btn'>Login</button></div>

           <div className='text-xs mt-4'>
           <p className='text-blue-500 uderline'><Link>Forgot your password?</Link></p>
           <p className='text-white'>Login as <Link className='text-blue-500' to='/login'>Member</Link></p>
         </div>
        </form>
        </div>
    </div>
  )
}

export default Admin