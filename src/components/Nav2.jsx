import React from 'react'
import logo from "../images/logo.png";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav2 = () => {
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
            <li className="flex gap-2 rounded-lg text-white bg-purple-900 md:bg-white p-2 md:text-purple-900 font-bold">
              <CgProfile className="hidden md:block" />
              ProfileName
              <RiArrowDropDownLine className="text-2xl" />
            </li>
          </div>
        </div>
        <div className="page flex list-none gap-1 item-center ml-20 items-center bg-white">
          <li className="hover:text-purple-900 hover:font-bold  active:bg-purple-900 active:text-white">
            <Link to="/">UI/UX</Link>
          </li>
          <IoIosArrowForward />
          <li className="hover:text-purple-900 hover:font-bold  active:bg-purple-900 active:text-white">
            <Link to="/">Refer & Earn</Link>
          </li>
          <IoIosArrowForward />
          <li className="hover:text-purple-900 hover:font-bold  active:bg-purple-900 active:text-white">
            <Link to="/referred">Friends referred</Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Nav2