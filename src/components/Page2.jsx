import React from 'react'
import Nav from './Nav'
import Terms from './Terms'
import Carousels from './Carousels'

const Page2 = () => {
    const Tstyle =
      "darkpurple text-2xl pl-5 font-semibold relative";
  return (
    <>
      <div className="bg-slate-100">
        <Nav hidden={"false"} />
        <Carousels />
        <Terms style={Tstyle } />
      </div>
    </>
  );
}

export default Page2