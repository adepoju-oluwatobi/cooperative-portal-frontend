import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { coperativeUserContext } from "../components/Context";
import axios from "axios";
import { server } from "../server";

function Admin() {
  const { email, setEmail, password, setPassword } = useContext(
    coperativeUserContext
  );
  const navigate = useNavigate();

  async function loginFunction(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${server}/login`, {
        email: email,
        password: password,
      });
      toast.success(`Welcome ${res.data.users.name}`);
      navigate("/admin-dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="bg-[url(./assets/login-background-mobile.png)] bg-cover h-[100vh] w-full">
      <Header />
      <div className="mt-10">
        <p className="heading text-center">Admin Login</p>
        <form action="" className="text-center" onSubmit={loginFunction}>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <button className="primary-btn">Login</button>
          </div>

          <div className="text-xs mt-4">
            <p className="text-blue-500 uderline">
              <Link>Forgot your password?</Link>
            </p>
            <p className="text-white">
              Login as{" "}
              <Link className="text-blue-500" to="/login">
                Member
              </Link>
            </p>
            <Link to="/admin-dashboard">
              <p>Go to dashboard</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin