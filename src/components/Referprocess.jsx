import React from "react";
import group from "../images/group.svg";
import tag from "../images/tag.svg";
import rs from "../images/rs.svg";
import offer from "../images/offer.svg";
import wallet from "../images/wallet.svg";

const Process = [
  {
    id: 1,
    title: "Invite Your Friends",
    desc: "Share the Link tutdude.com with your friend",
    icon: group,
  },
  {
    id: 2,
    title: "Friend Purchases any course ",
    desc: "using your Referral code on the page",
    icon: tag,
  },
  {
    id: 3,
    title: "You get ₹ 200 as referral money",
    desc: "of the total purchase your friend make shareable to your wallet",
    icon: rs,
  },
  {
    id: 4,
    title: "Your friends get ₹ 200 off",
    desc: "on his overall fee on successfull purchase using your referral code",
    icon: offer,
  },
  {
    id: 5,
    title: "Transfer Money from wallet",
    desc: "When the wallet balance reached rs 200 or more you can withdraw it",
    icon: wallet,
  },
];
const Referprocess = () => {
  return (
    <>
      <div className=" bg-white mt-5 px-2 w-full pt-5">
        <span className="darkpurple font-bold text-2xl pl-5 relative md:left-28 lg:left-56">
          How does it work?
        </span>
        {/* refer steps */}
        <div className="">
        <div className="flex w-fit mt-5 flex-wrap gap-10 justify-center">
          {Process.map((item) => {
            return (
              <div
                key={item.id}
                className="flex pl-5 gap-5 md:w-1/3 items-center justify-center"
              >
                <span className="p-5">
                  <img
                    src={item.icon}
                    className="icon border bg-slate-200 p-2 rounded-full"
                    alt=""
                  />
                </span>
                <div className="text flex flex-col">
                  <span className="text-lg font-bold">{item.title}</span>
                  <span>{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Referprocess;
