import React from "react";
import style from "./SignUpAsideBanner.module.css";
function SignUpAsideBanner() {
  return (
    <div className={`${style.asideSection}  min-h-screen relative h-full`}>
        <img className=" absolute top-6 left-6" src="https://res.cloudinary.com/krishanucloud/image/upload/v1653967593/LogolightLogo_gfades.png" alt="" srcset="" />
      <img
        style={{
          width: "object-fit",
        }}
        src="https://res.cloudinary.com/krishanucloud/image/upload/v1653941584/backgroundpattern_kq1ein.png"
        alt="pattern-bg"
      />
      <div
        className={` ${style.imagePosition} absolute flex flex-col  justify-center items-center gap-24`}
      >
        <img
          src="https://res.cloudinary.com/krishanucloud/image/upload/v1653967420/signUpBanner_bbyw9j.png"
          alt="hero-banner"
        />
        {/* Banner Text Section */}
        <div className=" flex flex-col justify-center items-center w-4/5 gap-5">
          <h1 className=" text-4xl font-bold text-white ">
            Speady, Easy and Fast
          </h1>
          <p className=" text-white text-xs text-center">
            Overpay help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a<span className=" text-yellow-600">$20</span> bonus when you
            receive qualifying direct deposits
          </p>
          {/* pattern indicatior */}
          <div className=" flex gap-2">
            <div className=" w-2 h-1 rounded-full bg-gray-400"></div>
            <div className=" w-7 h-1 rounded-3xl bg-white"></div>
            <div className=" w-2 h-1 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { SignUpAsideBanner };
