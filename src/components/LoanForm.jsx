import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function LoanForm() {
  return (
    <div>
      <Header />
      <div className="h-auto p-4">
        <p className="text-center font-bold text-3xl p-4">Loan Application Form</p>
        <form action="">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter your own home address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="amount of loan you are applying for"
            className="w-[100%]"
            required
          />
          <p className="underline font-bold">
            <span className="text-lg">Note:</span>You can only access 70% of
            your total savings as loan!
          </p>
          <input
            type="text"
            placeholder="Purpose of loan"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Terms of payment"
            className="w-[100%]"
            required
          />
          <p>
            <span className="text-lg underline font-bold">Guarantors</span>{" "}
            <span className="font-bold">{`(Note that the guarantors would be contacted upon verification of loan, provide only valid contacts.)`}</span>
          </p>
          <p className="bg-black text-white p-2 w-fit rounded-lg my-4">
            First Guarantor
          </p>
          <input
            type="text"
            placeholder="Enter name of guarntor"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's Phone Number"
            className="w-[100%]"
            required
          />
          <p className="bg-black text-white p-2 w-fit rounded-lg my-4">
            second Guarantor
          </p>
          <input
            type="text"
            placeholder="Enter name of guarntor"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Enter guarantor's Phone Number"
            className="w-[100%]"
            required
          />
          <p>Next of Kin</p>
           <input
            type="text"
            placeholder="Name"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="w-[100%]"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-[100%]"
            required
          />
          <input type="submit"  className="bg-black text-white"/>
          {/* <button>Submit</button> */}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default LoanForm;
