import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Admin() {
  // const [email, setEmail] = useState('');
  // const [password, setPaswword] = useState('');

  // const navigate = useNavigate();
  // let emailValue;
  // let passwordValue;

  // function getValue(){
  //    let emailInput = document.getElementById("email")
  //    let passwordInput = document.getElementById("password")

  //    emailValue = emailInput.value;
  //    passwordValue = passwordInput.value;

  //    alert(emailValue)

  // }

  // if (emailValue == "admin@gmail.com" && passwordValue == "admin"){
  //   navigate("/admin-dashboard")
  //   toast.success("Welcome to the admin dashboard")
  // }else{
  //   toast.error("You have entered a wrong email or password")
  // }
  return (
    <div className='bg-[url(./assets/login-background-mobile.png)] bg-cover h-[100vh] w-full'>
        <Header />
        <div className='mt-10'>
        <p className='heading text-center'>Admin Login</p>
        <form action="" className='text-center'>
            <div><input id='email' type="email" name='email' placeholder='Enter your email' /></div>
           <div> <input id='password' type="password" name='password' placeholder='Enter your password' /></div>
           <div> <button className='primary-btn'>Login</button></div>

           <div className='text-xs mt-4'>
           <p className='text-blue-500 uderline'><Link>Forgot your password?</Link></p><p className='text-white'>Login as <Link className='text-blue-500' to='/login'>Member</Link></p>
           <Link to="/admin-dashboard">
            <p>Go to dashboard</p>
           </Link>
         </div>
        </form>
        </div>
    </div>
  )
}

export default Admin