import React, { useState, useContext, useEffect } from "react";
import CreatedContext, { coperativeUserContext } from "../components/Context";
import Benefits from "../components/Benefits";
import Header from "../components/Header";
import ProfilePics from "../assets/profile_pics.svg";
import Bell from "../assets/bell.svg";
import CareService from "../assets/customer-care.svg";
import Settings from "../assets/settings.svg";
import Eye from "../assets/eye.svg";
import EyeClose from "../assets/eye-close.svg";
import Footer from "../components/Footer";
import { server, server_cooperative, server_cooperative_login } from "../server";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { userID, user_dash } = useContext(coperativeUserContext);

  const [userData, setUserData] = useState(null);
  console.log(userData);

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const data = await axios.post(`${server_cooperative_login}/logout_user`);
      window.localStorage.removeItem("user_token");
      navigate("/login");
      location.reload();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch user details when the component mounts
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(
          `${server_cooperative_login}/getsingle/${userID}`
        );
        setUserData(response.data); // Store user data in state
      } catch (error) {
        console.log(error);
      }
    }
    if (userID) {
      fetchUserData();
    }
  }, [userID]); // Run this effect whenever userID changes

  /**------------------------------------------------------------------- */
  // user_detail_container();
  let bal = document.getElementById("balance");
  let loan = document.getElementById("loan");
  let savings = document.getElementById("savings");
  let loanBalance = document.getElementById("loan-balance");
  let loanDeduction = document.getElementById("a");
  let totalLoanPaid = document.getElementById("total-loan-paid");
  let hideBal = document.getElementById("hide");
  let showBal = document.getElementById("show");
  let printStatementBtn = document.getElementById("print-statement-btn");

  //function to hide financial figure
  function hide() {
    bal = document.getElementById("balance").innerHTML = "xxxxxxxxxx";
    loan = document.getElementById("loan").innerHTML = "xxxxx";
    savings = document.getElementById("savings").innerHTML = "xxxxx";
    loanBalance = document.getElementById("loan-balance").innerHTML = "xxxxx";
    loanDeduction = document.getElementById("a").innerHTML = "xxxxx";
    totalLoanPaid = document.getElementById("total-loan-paid").innerHTML =
      "xxxxx";
    hideBal = document.getElementById("hide").style.display = "none";
    showBal = document.getElementById("show").style.display = "block";
  }
  //function to show financial figures
  function show() {
    bal = document.getElementById(
      "balance"
    ).innerHTML = `N ${userData.msg.data[0].available_balance}`;
    loan = document.getElementById(
      "loan"
    ).innerHTML = `N ${userData.msg.data[0].loan_amount}`;
    savings = document.getElementById(
      "savings"
    ).innerHTML = `N ${userData.msg.data[0].monthly_saving}`;
    loanBalance = document.getElementById(
      "loan-balance"
    ).innerHTML = `N ${userData.msg.data[0].loan_balance}`;
    loanDeduction = document.getElementById(
      "a"
    ).innerHTML = `N ${userData.msg.data[0].monthly_deduction}`;
    totalLoanPaid = document.getElementById(
      "total-loan-paid"
    ).innerHTML = `N ${userData.msg.data[0].total_loan_paid}`;
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
  //show date
  // Get the current date and time
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // Note: Months are zero-indexed (0-11)
  const options = { month: "long" };
  const specificMonth = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );
  const dayOption = {weekday: "long"};
const specificDay = new Intl.DateTimeFormat("en-US", dayOption).format(
  currentDate
);
const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="w-[300px] md:w-[600px] h-auto py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <img className="w-10 md:w-20" src={ProfilePics} alt="" />
              </div>
              <p className="text-sm md:text-xl">
                Hello, <span className="font-bold">{user_dash}</span>
                <span className="font-bold text-sm md:text-xl"></span>{" "}
              </p>
            </div>
            <div className="flex items-start cursor-pointer gap-3 pr-4">
              <button
                onClick={logout}
                className="p-1 px-2 mb-2 rounded-lg bg-red-500 text-white text-xs md:text-sm"
              >
                Logout
              </button>
              {/* <img className='w-5' src={Bell} alt="" />
              <img className='w-5' src={CareService} alt="" />
              <img className='w-5' src={Settings} alt="" /> */}
            </div>
          </div>

          <p className="text-sm">
            Account updated as at <span className="font-bold">July</span>, {year} {/* {hours} : {minutes} */}
          </p>
          {userData ? (
            <div className="w-[100%] h-fit md:h-fit bg-[#6A2982] text-white rounded-xl p-4 md:p-4 flex flex-col md:gap-2 my-2">
              {/** AVAILABLE BALANCE */}
              <div className="">
                <div className="flex items-center gap-2">
                  <p className="">Available Balance</p>
                  <img
                    className="w-4 md:w-6 "
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
                <p className="text-xl md:text-3xl font-bold" id="balance">
                  {`N ${userData.msg.data[0].available_balance}`}
                </p>
                {/* <p className="text-xs font-thin opacity-50">
                  Devided:{} || Total bal: N155,000.00
                </p> */}
              </div>
              {/** MONTHLY SAVINGS */}
              <div className="">
                <p className="text-xs md:text-sm">Curr. Month. Savings</p>
                <p className="font-bold md:text-2xl" id="savings">
                  {`N ${userData.msg.data[0].monthly_saving}`}
                </p>
              </div>

              {/**LOAN BRIEF */}
              <p className="text-lg font-bold underline mt-2">Loan Brief</p>
              <div className="flex gap-4 w-[100%] flex-wrap">
                {/** LOAN AMOUNT */}
                <div children="">
                  <p className="text-xs md:text-sm">Loan Amount</p>
                  <p className="font-bold text-sm md:text-2xl" id="loan">
                    {`N ${userData.msg.data[0].loan_amount}`}
                  </p>
                </div>
                <div className="">
                  <p className="text-xs md:text-sm">Total Loan Paid</p>
                  <p
                    className="font-bold text-sm md:text-2xl"
                    id="total-loan-paid"
                  >
                    {`N ${userData.msg.data[0].total_loan_paid}`}
                  </p>
                </div>
                <div className="">
                  <p className="text-xs md:text-sm">Curr. Loan Bal.</p>
                  <p
                    className="font-bold text-sm md:text-2xl"
                    id="loan-balance"
                  >
                    {`N ${userData.msg.data[0].loan_balance}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm">Curr. Mnth. Loan Paid</p>
                  <p className="font-bold text-sm md:text-2xl" id="a">
                    {`N ${userData.msg.data[0].monthly_deduction}`}
                  </p>
                </div>
              </div>

                 {/**PURCHASE BRIEF */}
              <p className="text-lg font-bold underline mt-2">Purchase Brief</p>
              <div className="flex gap-4 w-[100%] flex-wrap">
                {/** LOAN AMOUNT */}
                <div children="">
                  <p className="text-xs md:text-sm">Purchase Amount</p>
                  <p className="font-bold text-sm md:text-2xl" id="loan">
                    N 0
                  </p>
                </div>
                <div className="">
                  <p className="text-xs md:text-sm">Total Purchase Paid</p>
                  <p
                    className="font-bold text-sm md:text-2xl"
                    id="total-loan-paid"
                  >
                    N 0
                  </p>
                </div>
                <div className="">
                  <p className="text-xs md:text-sm">Curr. pur. Bal.</p>
                  <p
                    className="font-bold text-sm md:text-2xl"
                    id="loan-balance"
                  >
                    N 0
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm">Curr. Mnth. pur. Paid</p>
                  <p className="font-bold text-sm md:text-2xl" id="a">
                    N 0
                  </p>
                </div>
              </div>
              
            </div>
          ) : (
            <div>
              <h1 className="font-bold text-center bg-[#6A2982] text-white p-10 rounded-2xl my-4">
                Please wait some seconds, we are fetching your data
              </h1>
            </div>
          )}

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
