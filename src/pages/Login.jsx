import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Login() {
  return (
    <div>
      <div className='bg-[url(./assets/login-background-mobile.png)] bg-cover h-[100vh] w-full'>
      <Header />
        <div className='mt-10'>
        <p className='heading text-center'>Member Login</p>
        <form action="" className='text-center'>
            <div><input id='email' type="email" placeholder='Enter your email' required /></div>
           <div> <input id='password' type="password" placeholder='Enter your password' required/></div>
           <div> <button id='login' className='primary-btn'>Login</button></div>

         <div className='text-xs mt-4'>
         <p className='text-white'>You don't have an account? <Link className='text-blue-500' to='/register'>Register here</Link></p>
           <p className='text-blue-500 uderline'><Link>Forgot your password?</Link></p>
<p className='text-white'>Login as <Link className='text-red-500' to='/admin'>Admin</Link></p>
         </div>
        </form>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Login