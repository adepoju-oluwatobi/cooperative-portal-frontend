import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
        <Header />
        <div className='flex flex-col gap-4 justify-center items-center'>
            <p className='text-2xl font-bold text-center mt-4'>Admin Dashboard</p>
            <p className='text-red-500 text-center text-lg md:hidden'>Please, use a computer to proceed</p>
            <button className='bg-black text-white p-4 rounded-xl text-center m-auto md:hidden'>
               <Link to = '/'> Go back to Home</Link>
            </button>

           <div className='hidden md:block'>
            <button className='bg-green-800 text-sm p-2 rounded-lg text-white mb-2'>Add New Member</button>
             <div className='w-[720px] h-auto p-4 bg-slate-600 rounded-lg'>
                <table className=''>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Savings</th>
                      <th>Loan Amount</th>
                      <th>Balance</th>
                      <th className='w-[100px]'>Edit</th>
                       <th className='w-[100px]'>Deslete</th>
                    </tr>

                     <tr>
                      <td>1</td>
                      <td>Adepoju Oluwatobi</td>
                      <td>N20,000</td>
                      <td>N150,000</td>
                      <td>130,000</td>
                       <td className='bg-green-400 text-center cursor-pointer'>Edit</td>
                       <td className='bg-red-400 text-center cursor-pointer'>Deslete</td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Adepoju Oluwatobi</td>
                      <td>N20,000</td>
                      <td>N150,000</td>
                      <td>130,000</td>
                       <td className='bg-green-400 text-center cursor-pointer'>Edit</td>
                       <td className='bg-red-400 text-center cursor-pointer'>Deslete</td>
                    </tr>

                     
                </table>
            </div>
           </div>
        </div>
    </div>
  )
}

export default AdminDashboard