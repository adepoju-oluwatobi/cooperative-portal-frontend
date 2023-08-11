import React from 'react'
import Vp from '../assets/vice-president.png'
import FinancialSec from "../assets/financial-secretary.png";
import DummyImg3 from '../assets/dummy-off3.png'

function Officials() {
  return (
    <div>
      <p className="md:text-3xl text-2xl mt-4 font-bold text-center">
        Our Officials
      </p>

      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={Vp} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr Samuel <span className="font-bold">Fadare</span>
            </p>
            <p className="text-center font-bold">Vice President</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={FinancialSec} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr. Michael <span className="font-bold">Akindolani</span>
            </p>
            <p className="text-center font-bold">Financial Secretary</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={DummyImg3} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              FirstName <span className="font-bold">LastName</span>
              <p className="text-center font-bold">Vice President</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Officials