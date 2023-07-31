import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import UnderConstruction from "./pages/UnderConstruction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { ToastContainer } from "react-toastify";
import CreatedContext from "./components/Context";

const router = createBrowserRouter([
 {
  path: "/home",
  element: <App />,
 },
 {
  path: "/",
  element: <HomePage />
 },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/under-construction",
    element: <UnderConstruction />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "admin-dashboard",
    element: <AdminDashboard />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreatedContext>
    <RouterProvider router={router} />
    </CreatedContext>
    <ToastContainer />
  </React.StrictMode>

);