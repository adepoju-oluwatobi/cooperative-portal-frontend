import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
     axios
       .get("http://localhost:3000/users/" + id)
       .then((res) => setData(res.data))
       .catch((err) => console.log(err));
  }, []);

  
  async function handleSubmit(event) {
    event.preventDefault();
   axios.put("http://localhost:3000/users/" + id, data).then((res) => {
     toast.info("Data updated successfully!");
     navigate("/admin-dashboard");
   });
  }
  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-[100vh] bg-no-repeat bg-cover pt-[5%]">
        <div>
          <form
            action=""
            className="flex flex-col w-fit m-auto bg-black bg-opacity-60 p-4"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Members Name"
              type="text"
              value={data.id}
              disabled
            />
            <input
              placeholder="Members Name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              placeholder="Monthly Savings"
              type="text"
              value={data.monthlySavings}
              onChange={(e) =>
                setData({ ...data, monthlySavings: e.target.value })
              }
            />
            <input
              placeholder="Loan Amount"
              type="text"
              value={data.loanAmount}
              onChange={(e) => setData({ ...data, loanAmount: e.target.value })}
            />
            <input
              placeholder="Loan Balance"
              type="text"
              value={data.loanBalance}
              onChange={(e) =>
                setData({ ...data, loanBalance: e.target.value })
              }
            />
            <input
              placeholder="Loan Monthly Deduction"
              type="text"
              value={data.monthlyDeduction}
              onChange={(e) =>
                setData({ ...data, monthlyDeduction: e.target.value })
              }
            />
            <input
              placeholder="Available Balance"
              type="text"
              value={data.availableBal}
              onChange={(e) =>
                setData({ ...data, availableBalance: e.target.value })
              }
            />
            <button className="bg-violet-500 border-0 text-white p-2 cursor-pointer rounded-xl">
              Update
            </button>
          </form>
          <Link to="/admin-dashboard">
            <div className="flex justify-center">
              <p className="p-2 bg-red-500 w-[80px] text-white rounded-lg text-center mt-4">
                Back
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditUser;
