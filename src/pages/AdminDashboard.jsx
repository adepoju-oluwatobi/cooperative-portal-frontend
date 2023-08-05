import React from 'react'
import Header from '../components/Header'
import { Link, Navigate } from 'react-router-dom'
import {user} from '../components/data';
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
   const navigate = useNavigate();
   function edit(){
      navigate('/edit-user')
   }
   return (
     <div>
       <Header />
       <p className="font-bold text-3xl text-center p-4">Admin Dashboard</p>
       <div className="w-[100%] h-[100%] flex flex-col justify-center">
         <button className="bg-green-300 w-fit m-4 p-2">Add new member</button>
         <table border="1" className="m-4 text-center">
           <thead>
             <tr>
               <th>#</th>
               <th>Name</th>
               <th>Mont. Sav.</th>
               <th>Loan Amt.</th>
               <th>loan Bal.</th>
               <th>loan mont. ded.</th>
               <th>Aval. Bal.</th>
               <th>Edit</th>
               <th>Delete</th>
             </tr>
           </thead>
           <tbody>
             {user.map((data) => (
               <tr key={data.id}>
                 <td>{data.id}</td>
                 <td>{data.name}</td>
                 <td>{data.monthly_savings}</td>
                 <td>{data.loan_amount}</td>
                 <td>{data.loan_balance}</td>
                 <td>{data.loan_monthly_deduction}</td>
                 <td>{data.available_bal}</td>
                 <td>
                   <p className="bg-blue-300 p-2" onClick={edit}>Edit</p>
                 </td>
                 <td>
                   <p className="bg-red-300 p-2">Delete</p>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
}

export default AdminDashboard