import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const Refer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {/* ---------box1-------- */}
        <div className="flex gap-10 px-4 flex-wrap bg-white mt-10 mx-4 p-5 rounded-lg  md:w-1/3 shadow-2xl">
          <div className="flex flex-col gap-2">
            <span className="darkpurple font-medium">Referral Earning</span>
            <span className="flex text-2xl items-center">
              <FaRupeeSign />
              <span className=" font-medium">2,500</span>
            </span>
          </div>

          <div className="flex-col gap-2">
            <span className="darkpurple font-medium">Total Referrals</span>
            <span className="flex text-2xl items-center font-medium">7</span>
          </div>

          <div className="flex-col gap-2 ">
            <span className="darkpurple font-medium">Wallet Balance</span>
            <span className="flex text-2xl items-center">
              <FaRupeeSign />
              <span className=" font-medium">500</span>
            </span>
          </div>
          <div className="bg-fuchsia-800 w-fit rounded-full mx-auto mt-4 text-white px-5  my-auto py-2 hover:cursor-pointer hover:bg-white hover:text-purple-900 hover:font-bold hover:border hover:border-purple-800">
            <span>Withdraw Balance</span>
          </div>
        </div>
        {/* ------------box1 ends-------------- */}

        {/* ------------box2 starts-------------- */}
        <div className="flex gap-5 px-4 flex-col bg-white mt-10 mx-4 p-5 rounded-lg w-full md:w-1/3 ">
          <span className="font-bold text-xl darkpurple">Your Referral Code</span>
          <span
            className="border-2 rounded-2xl py-5 mx-auto px-5 md:px-5 border-gradient tracking-widest"
            
          >
            E D C H 5 4
          </span>
        </div>
      </div>
    </>
  );
};

export default Refer;
