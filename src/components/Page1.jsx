import React from 'react'
import Nav from './Nav'
import Terms from './Terms'
import Refer from './Refer'
import Referprocess from './Referprocess'

const page1 = () => {
  const Tstyle = "darkpurple text-2xl pl-5 font-semibold relative md:left-28 lg:left-56"
  return (
    <>
      <Nav hidden={"hidden"} />
      <Refer />
      <Referprocess />
      <div className="pt-5 pl-5 ">
        <span className="darkpurple text-2xl pl-5 font-semibold relative md:left-28 lg:left-56">
          Friends who Enrolled
        </span>
      </div>
      <Terms style={Tstyle} />
    </>
  );
}

export default page1