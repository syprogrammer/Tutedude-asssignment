import React from 'react'
import logo from '../images/logo.png'
import { CgProfile } from "react-icons/cg";
import { FaRupeeSign } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import {  Link } from "react-router-dom";
const Nav = ({hidden}) => {
  return (
    <>
      <div className="bg-white pb-5">
        <div className="nav-container flex justify-between bg-white">
          <div className="img">
            <img src={logo} alt="Tutdude" />
          </div>
          <div className="links list-none flex gap-10 mr-4 text-center items-center purple">
            <li className="hidden lg:block md:block">My assignment </li>
            <li className="hidden lg:block md:block">Chat with Mentor </li>
            <li className="flex gap-2 rounded-lg text-white bg-fuchsia-700 md:bg-white p-2 md:text-fuchsia-700 font-bold">
              <CgProfile className="hidden md:block" />
              ProfileName
              <RiArrowDropDownLine className="text-2xl" />
            </li>
          </div>
        </div>
        <div className="page flex list-none gap-1 item-center ml-20 items-center bg-white">
          <li>
            <Link to="/">UI/UX</Link>
          </li>
          <IoIosArrowForward />
          <li>
            <Link to="/">Refer & Earn</Link>
          </li>
          <IoIosArrowForward />
          <li>
            <Link to="/referred">Friends referred</Link>
          </li>
        </div>
        <div className="goback md:hidden">
          <span
            className={`flex gap-2 items-center ml-20 font-semibold pt-2 darkpurple ${hidden}`}
          >
            <FiArrowLeft />
            <Link to="/">go back</Link>
          </span>
        </div>
      </div>

      <div className="refer-detail flex justify-between px-5 my-5">
        <div
          className={`your-refer darkpurple flex flex-col items-center ${hidden}`}
        >
          <span className="font-semibold text-xl">Your Referral Code</span>
          <span className="text-black">E D C H 5 4</span>
        </div>
        <div
          className={`wallet-balance flex flex-col items-center p-2 rounded-xl bg-white shadow-xl ${hidden}`}
        >
          <span className="text-fuchsia-700 font-medium">Wallet Balance</span>
          <span className="flex">
            <FaRupeeSign />
            500
          </span>
        </div>
      </div>
    </>
  );
}

export default Nav