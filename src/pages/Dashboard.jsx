import React, { useState, useContext } from "react";
import CreatedContext, { coperativeUserContext } from "../components/Context";
import Benefits from "../components/Benefits";
import Header from "../components/Header";
import ProfilePics from "../assets/profile_pics.svg";
import Bell from "../assets/bell.svg";
import CareService from "../assets/customer-care.svg";
import Settings from "../assets/settings.svg";
import Eye from "../assets/eye.svg";
import EyeClose from "../assets/eye-close.svg";
import LogoutBtn from "../assets/logout-btn.svg"
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
  const [balance, setBalance] = useState("N150,000.00");
  const [loanAmt, setLoanAmt] = useState("N150,000.00");
  const [loanBal, setLoanBal] = useState("N137,500.00");
  const [loanDed, setLoanDed] = useState("N12,500.00");
  const [monthlySav, setMonthlySav] = useState("N20,000.00");
  const [dividend, setDividend] = useState(`N${5000}`);

  let bal = document.getElementById("balance");
  let loan = document.getElementById("loan");
  let savings = document.getElementById("savings");
  let loanBalance = document.getElementById("loan-balance");
  let loanDeduction = document.getElementById("a");
  let hideBal = document.getElementById("hide");
  let showBal = document.getElementById("show");
  let printStatementBtn = document.getElementById("print-statement-btn");

  //loanDeduction = document.getElementById("a").innerHTML = "Fuck you";

  //function to hide financial figure
  function hide() {
    bal = document.getElementById("balance").innerHTML = "xxxxxxxxxx";
    loan = document.getElementById("loan").innerHTML = "xxxxx";
    savings = document.getElementById("savings").innerHTML = "xxxxx";
    loanBalance = document.getElementById("loan-balance").innerHTML = "xxxxx";
    loanDeduction = document.getElementById("a").innerHTML = "xxxxx";
    hideBal = document.getElementById("hide").style.display = "none";
    showBal = document.getElementById("show").style.display = "block";
  }
  //function to show financial figures
  function show() {
    bal = document.getElementById("balance").innerHTML = balance;
    loan = document.getElementById("loan").innerHTML = loanAmt;
    savings = document.getElementById("savings").innerHTML = monthlySav;
    loanBalance = document.getElementById("loan-balance").innerHTML = loanBal;
    loanDeduction = document.getElementById("a").innerHTML = loanDed;
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

    //show date
    const currentDate = new date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
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
                <img className="w-10 md:w-20" src={ProfilePics} alt="" />
              </div>
              <p className="md:text-xl">
                Hello,{" "}
                <span className="font-bold text-sm md:text-xl">
                  {user?.data.users}
                </span>{" "}
              </p>
            </div>
            <div className="flex items-start cursor-pointer gap-3 pr-4">
              {/**LOGOUT BUTTON */}
                {/* <img src={LogoutBtn} alt="" /> */}
              <button
                onClick={logout}
                className="p-1 px-2 mb-2 rounded-lg bg-red-500 text-white text-xs md:text-sm">
                Logout
              </button>
              {/* <img className='w-5' src={Bell} alt="" />
              <img className='w-5' src={CareService} alt="" />
              <img className='w-5' src={Settings} alt="" /> */}
            </div>
          </div>

          <div className="w-[100%] h-[180px] md:h-[280px] bg-[#6A2982] text-white rounded-xl px-4 py-2 md:p-4 flex flex-col md:gap-2">
             {/** AVAILABLE BALANCE */}
            <div className="">
              <div className="flex items-center gap-2">
                <p className="md:text-2xl">Available Balance</p>
                <img
                  className="w-4 md:w-6"
                  src={Eye}
                  alt=""
                  onClick={hide}
                  id="hide"
                />
                <img
                  className="w-4 md:w-6 hidden"
                  src={EyeClose}
                  alt=""
                  onClick={show}
                  id="show"
                />
              </div>
              <p className="text-3xl md:text-5xl font-bold" id="balance">
                {balance}
              </p>
               <p className="text-xs font-thin opacity-50">Devided:{dividend} || Total bal: N155,000.00</p>
            </div>
            {/** MONTHLY SAVINGS */}
            <div>
              <p className="text-sm md:text-lg">Monthly Savings</p>
              <p className="font-bold md:text-2xl" id="savings">
                {monthlySav}
              </p>
            </div>
            {/** LOAN */}
            <div className="flex gap-2">
              {/** LOAN AMOUNT */}
              <div>
                <p className="text-xs md:text-lg">Loan Amount</p>
                <p className="font-bold text-sm md:text-2xl" id="loan">
                  {loanAmt}
                </p>
              </div>
              {/**LOAN BALANCE */}
              <div>
                <p className="text-xs md:text-lg">Loan Balance</p>
                <p className="font-bold text-sm md:text-2xl" id="loan-balance">
                  {loanBal}
                </p>
              </div>
              {/**LOAN MONTHLY DEDUCTION */}
              <div>
                <p className="text-xs md:text-lg">Deduction</p>
                <p className="font-bold text-sm md:text-2xl" id="a">
                  {loanDed}
                </p>
              </div>
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
