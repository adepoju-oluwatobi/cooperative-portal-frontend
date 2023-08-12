import React from 'react'
import Vp from '../assets/vice-president.png'
import FinancialSec from "../assets/financial-secretary.png";
import AssSec from "../assets/ass-sec.png";
import AssFinSec from "../assets/ass-fin-sec.png"
import ChiefWhip from "../assets/chief-whip.png"
import PRO from "../assets/pro.png"
import Treasurer from "../assets/treasurer.png"
import President from "../assets/dummy-off1.png"

function Officials() {
  return (
    <div>
      <p className="md:text-3xl text-2xl mt-4 font-bold text-center">
        Our Officials
      </p>

      <div className="flex flex-wrap justify-center items-center">

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={President} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr. Akintirohun <span className="font-bold">Olabode</span>
            </p>
            <p className="text-center font-bold">President</p>
          </div>
        </div>

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
            <img className="w-[200px]" src={AssSec} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mrs. Ogunjobi <span className="font-bold">Bolanle</span>
              <p className="text-center font-bold">Assistant Secretary</p>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={AssFinSec} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr. Olorunfemi <span className="font-bold">Michael</span>
            </p>
            <p className="text-center font-bold">Asst. Financial Secretary</p>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={Audito} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr. Babatunde <span className="font-bold">Kayode</span>
            </p>
            <p className="text-center font-bold">Auditor</p>
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={ChiefWhip} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr. Bamgbola <span className="font-bold">T.A</span>
            </p>
            <p className="text-center font-bold">Chief Whip</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={PRO} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mr. Akerele <span className="font-bold">Akinola .O</span>
            </p>
            <p className="text-center font-bold">Public Relation Officer</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-[200px]" src={Treasurer} alt="" />
          </div>
          <div className="-mt-4">
            <p>
              Mrs Olajumoke <span className="font-bold">Ajibola</span>
            </p>
            <p className="text-center font-bold">Treasurer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Officials