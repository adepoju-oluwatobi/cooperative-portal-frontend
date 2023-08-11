import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { toast } from "react-toastify";
import Header from "./Header";
import AddMember from "../assets/add-member.svg"
import Loading from "./Loading";
import Error from "./Error";

function Dashboard() {
  /**HOLD THE DATA FROM DATABASE */
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); //USED FOR NAVIGATING

  /**FETCHES THE DATA FROM BACKEND */
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
        setLoading(false);
      })
      .catch((err) => {
        //RETURN ERROR IF FAILED
        setError("Error fetching data from the API.");
        setLoading(false);
        console.error(err);
      });
  }, []);
  /**HANDLE LOAD TIME IF THE DATA TOOK TOO LONG TO FETCH */
  if (loading) {
    return (
      <Loading/>
    );
  }
  /**HANDLES ERROR IF DATA COULD NOT BE FETCHED */
  if (error) {
    return (
    <div>
      <Error/>
    </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-[100vh]">
        <div className="pt-4 md:hidden">
          <div className="p-4 bg-black bg-opacity-50 w-fit m-auto text-white text-xs text-center">
            <p className="">
              you have to switch to a desktop to view all users.
            </p>
            <p>But you can Add member to the database.</p>
          </div>
          <div className="flex justify-center">
            <Link to="/create">
              <p className="bg-violet-500 text-white w-fit p-2 my-2 flex rounded-xl">
                {" "}
                Add New Member <img className="w-6" src={AddMember} alt="" />
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-[url(./assets/loan-bg.jpg)] h-auto bg-no-repeat bg-cover hidden md:block">
          <p className="text-center text-2xl font-bold p-6">Admin Dashboard</p>
          <div className="w-fit m-auto">
            <Link to="/create">
              <p className="bg-violet-500 text-white w-fit p-2 my-2 flex rounded-xl">
                {" "}
                Add New Member <img className="w-6" src={AddMember} alt="" />
              </p>
            </Link>
            <div className="py-4">
              <table
                border="1"
                className="text-white text-center border border-white"
              >
                <thead className="bg-black">
                  <tr>
                    {/**MAPS THE TITLE OF EACH COLUMN FROM THE BACKEND */}
                    {/* {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))} */}
                    <th>#</th>
                    <th>Name</th>
                    <th>Monthly Savings</th>
                    <th>Loan Amount</th>
                    <th>Loan Balance</th>
                    <th>Monthly deduction</th>
                    <th>Available Bal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-400">
                  {/**MAPS THE DATA FROM THE BACKEND */}
                  {records.map((record) => (
                    <tr key={record.id}>
                      <td>{record.id}</td>
                      <td>{record.name}</td>
                      <td>{record.monthlySavings}</td>
                      <td>{record.loanAmount}</td>
                      <td>{record.loanBalance}</td>
                      <td>{record.monthlyDeduction}</td>
                      <td>{record.availableBalance}</td>
                      <td className="flex gap-4">
                        <Link to={`/update/${record.id}`}>
                          <div className="">
                            <img src={EditIcon} alt="edit" className="w-6" />
                          </div>
                        </Link>
                        <div
                          className=""
                          onClick={(e) => deleteUser(record.id)}
                        >
                          <img
                            src={DeleteIcon}
                            alt="edit"
                            className="w-6 h-4"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center" id="delete">
        <div className="absolute top-[30%] bg-black text-white w-[300px] h-[260px] p-4 rounded-xl text-center">
          <p className="font-bold text-lg mb-4 mt-10">
            Are you sure you want to delete member?
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="p-2 bg-red-500 w-[100px] rounded-xl"
              id="no-delete-btn"
            >
              Yes
            </button>
            <Link to="/admin-dashboard">
              <button
                className="p-2 bg-green-500 w-[100px] rounded-xl"
                id="no-delete-btn"
              >
                No
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
  function deleteUser(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          navigate("/admin-dashboard");
          toast.success("User have been deleted successfully");
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  }
}

export default Dashboard;
