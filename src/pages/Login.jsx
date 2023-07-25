import React from 'react'
import {useState, useContext} from 'react'
import {coperativeUserContext} from '../components/Context'
import axios from 'axios'
import { server } from '../server'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { toast } from 'react-toastify';

function Login() {
  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  */
 const {email, setEmail, password, setPassword} = useContext(coperativeUserContext)
  const navigate = useNavigate();


    async function loginFunction(e)
    {
      e.preventDefault(); 
      try {
        let res = await axios.post(`${server}/login`, {
          email: email,
          password: password
      });
      toast.success(`Welcome ${res.data.users.name}`);
      navigate("/dashboard");

      } catch (error) {
        alert(error.message);
      }
      
    }
  return (
    <div>
      <div className='bg-[url(./assets/login-background-mobile.png)] bg-cover h-[100vh] w-full'>
      <Header />
        <div className='mt-10'>
        <p className='heading text-center'>Member Login</p>

          <form action="" className='text-center' onSubmit={loginFunction}>
            <div>
              <input 
              id='email' 
              type="email" 
              placeholder='Enter your email' 
              required 
              value = {email}
              onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

           <div> 
            <input 
            id='password' 
            type="password" 
            placeholder='Enter your password' 
            required
            value = {password}
            onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

           <div> 
            <button 
            id='login' 
            className='primary-btn'>
              Login
            </button>
          </div>

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