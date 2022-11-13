import React from 'react'
import { FaRupeeSign } from "react-icons/fa";

const Enrolled = () => {
  return (
    <>
      <div className="box gradient w-fit p-3 mx-2 rounded-2xl">
        <div className="Dhiraj-Saxena flex justify-between mb-1 font-semibold ">
          <span className='text-lg tracking-wider'>Dhiraj Saxena</span>
          <span>14 sep 2022</span>
        </div>
        <div className="course-enrolled flex flex-col ">
          <span className="font-medium tracking-wide">Courses Enrolled(7)</span>
          <div className="course-list flex gap-2 flex-wrap justify-center my-2">
            <span className="border-white border w-fit  px-2.5 rounded-full">
              Ui/Ux
            </span>
            <span className="border-white border w-fit  px-2.5 rounded-full">
              Python
            </span>
            <span className="border-white border w-fit  px-2.5 rounded-full">
              Adobe Photoshop
            </span>
            <span className="border-white border w-fit  px-2.5 rounded-full">
              Java
            </span>
            <span className="border-white border w-fit  px-2.5 rounded-full">
              React js
            </span>
            <span className="border-white border w-fit  px-2.5 rounded-full">
              C++
            </span>
            <span className="border-white border w-fit  px-2.5 rounded-full">
              Full Stack web development
            </span>
          </div>
          <div className="referallamount pt-2 pl-2">
            <span className="flex items-center gap-1">
              Referrral Amount
              <span className="font-bold flex text-xl items-center">
                <FaRupeeSign />
                500
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enrolled