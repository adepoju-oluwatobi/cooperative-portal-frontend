import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

function Add() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    address: "",
    PhoneNumber: "",
    nextOfKin: "",
    password: "",
    monthlySavings: "",
    loanAmount: "",
    loanBalance: "",
    monthlyDeduction: "",
    availableBalance: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users/", inputData)
      .then((res) => {
        toast.success("Data added successfully");
        navigate("/admin-dashboard");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-auto bg-no-repeat bg-cover">
        <p className="text-center font-bold text-3xl pt-[20px]">
          Register a new member
        </p>
        <div className="pb-4">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col w-fit bg bg-opacity-50 m-auto bg-black p-4 mt-4"
          >
            <input
              placeholder="Members Name"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              required
            />
            <input
              placeholder="Email"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              required
            />
            <input
              placeholder="Address"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
              required
            />
            <input
              placeholder="Next of kin"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, nextOfKin: e.target.value })
              }
              required
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
              required
            />
            <input
              placeholder="Monthly Savings"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, monthlySavings: e.target.value })
              }
              required
            />
            <input
              placeholder="Loan Amount"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, loanAmount: e.target.value })
              }
            />
            <input
              placeholder="Loan Balance"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, loanBalance: e.target.value })
              }
            />
            <input
              placeholder="Loan Monthly Deduction"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, monthlyDeduction: e.target.value })
              }
            />
            <input
              placeholder="Available Balance"
              type="text"
              onChange={(e) =>
                setInputData({ ...inputData, availableBalance: e.target.value })
              }
            />
            <input
              type="submit"
              className="bg-violet-500 border-0 text-white p-2 cursor-pointer"
            />
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

export default Add;
