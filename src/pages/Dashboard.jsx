import React, { useState, useContext } from "react";
import CreatedContext, { coperativeUserContext } from "../components/Context";
import Benefits from "../components/Benefits";
import Header from "../components/Header";
import ProfilePics from "../assets/dummy-off1.png";
import Bell from "../assets/bell.svg";
import CareService from "../assets/customer-care.svg";
import Settings from "../assets/settings.svg";
import Eye from "../assets/eye.svg";
import Footer from "../components/Footer";
import { server } from "../server";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useContext(coperativeUserContext);
  const sharedData = useContext(CreatedContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(`${server}/logout`);
    } catch (error) {
      console.log("error");
    }
  };

  //handles the values of finaces in dashboard
  const [balance, setBalance] = useState("N100,000.00");
  const [loanAmt, setLoanAmt] = useState("N150,000.00");
  const [loanBal, setLoanBal] = useState("N137,500.00");
  const [loanDeduction, setLoanDeduction] = useState("N12,500.00");
  const [monthlySav, setMonthlySav] = useState("N20,000.00");

  let bal = document.getElementById("balance");
  let loan = document.getElementById("loan");
  let savings = document.getElementById("savings");
  let hideBal = document.getElementById("hide");
  let showBal = document.getElementById("show");
  let printStatementBtn = document.getElementById("print-statement-btn");

  //function to hide financial figure
  function hide() {
    bal = document.getElementById("balance").innerHTML = "xxxxxxxxxx";
    loan = document.getElementById("loan").innerHTML = "xxxxx";
    savings = document.getElementById("savings").innerHTML = "xxxxx";
    hideBal = document.getElementById("hide").style.display = "none";
    showBal = document.getElementById("show").style.display = "block";
  }
  //function to show financial figures
  function show() {
    bal = document.getElementById("balance").innerHTML = balance;
    loan = document.getElementById("loan").innerHTML = loanAmt;
    savings = document.getElementById("savings").innerHTML = monthlySav;
    hideBal = document.getElementById("hide").style.display = "block";
    showBal = document.getElementById("show").style.display = "none";
  }

  function applyForLoan() {
    navigate("/loan-form");
  }

  function printStatement() {
    toast.info(
      "This service is not available yet. We ll notify once its done."
    );
    printStatementBtn = document.getElementById(
      "print-statement-btn"
    ).style.background = "gray";
  }

  function makePurchase() {
    toast.info(
      "This service is not available yet. We ll notify once its done."
    );
  }
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="w-[300px] md:w-[600px] h-auto py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* <img className="w-10 md:w-20" src={ProfilePics} alt="" /> */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p className="md:text-xl">
                Hello,{" "}
                <span className="font-bold text-sm md:text-base">
                  {user?.data.users}
                </span>{" "}
                <span className="font-bold">{sharedData}</span>
              </p>
            </div>
            <div className="flex items-start cursor-pointer gap-3 pr-4">
              {/**LOGOUT BUTTON */}
              <button
                onClick={logout}
                className="p-1 px-2 mb-2 rounded-lg bg-red-500 text-white"
              >
                Logout
              </button>
              {/* <img className='w-5' src={Bell} alt="" />
              <img className='w-5' src={CareService} alt="" />
              <img className='w-5' src={Settings} alt="" /> */}
            </div>
          </div>

          <div className="w-[100%] h-[180px] md:h-[280px] bg-[#6A2982] text-white rounded-xl px-4 py-2 md:p-4 flex flex-col md:gap-2">
            <div className="">
              <div className="flex items-center gap-2">
                <p className="md:text-2xl">Available Balance</p>
                <img
                  className="w-3"
                  src={Eye}
                  alt=""
                  onClick={hide}
                  id="hide"
                />
                <img
                  className="w-3 hidden"
                  src={Eye}
                  alt=""
                  onClick={show}
                  id="show"
                />
              </div>
              <p className="text-3xl md:text-5xl font-bold" id="balance">
                {balance}
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <p className="text-xs md:text-lg">Loan Amount</p>
                <p className="font-bold text-sm md:text-2xl" id="loan">
                  {loanAmt}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-lg">Loan Balance</p>
                <p className="font-bold text-sm md:text-2xl" id="loan">
                  {loanBal}
                </p>
              </div>
              <div>
                <p className="text-xs md:text-lg">Deduction</p>
                <p className="font-bold text-sm md:text-2xl" id="loan">
                  {loanDeduction}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm md:text-lg">Monthly Savings</p>
              <p className="font-bold md:text-2xl" id="savings">
                {monthlySav}
              </p>
            </div>
          </div>

          <div className="flex justify-evenly mt-2">
            <div
              className="bg-black text-white p-2 rounded-lg cursor-pointer"
              onClick={applyForLoan}
            >
              <p className="text-[10px] md:text-base md:p-2">Apply for loan</p>
            </div>
            <div
              id="print-statement-btn"
              className="bg-black text-white p-2 rounded-lg cursor-pointer "
              onClick={printStatement}
            >
              <p className="text-[10px] md:text-base md:p-2">Print Statement</p>
            </div>
            <div
              className="bg-black text-white p-2 rounded-lg cursor-pointer"
              onClick={makePurchase}
            >
              <p className="text-[10px] md:text-base md:p-2">Make a purchase</p>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <Footer />
    </div>
  );
}

export default Dashboard;
