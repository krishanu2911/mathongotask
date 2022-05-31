import React, { useState } from "react";
import style from "./SignUpDetail.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
function SignUpDetail() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex flex-col  p-6 min-h-screen h-full justify-between">
      <div className=" flex flex-col justify-between items-center mt-20">
        <section
          className={`${style.signInputSection} flex flex-col gap-6 w-full`}
        >
          <header className="text-center flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Sign up for an account</h1>
            <h3 className="text-sm text-gray-500">
              Send, spend and save smarter
            </h3>
          </header>
          <section>
            <div>
              <div className=" flex justify-center  items-center gap-2 cursor-pointer  hover:bg-slate-50 btnBorder   rounded-lg   border-slate-300  py-2 ">
                <FcGoogle />
                Sign in with Google
              </div>
              <div className="  my-5 text-center ">
                <h1 className=" text-sm text-gray-500">
                  -------- or with email --------
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  className="btnBorder rounded-lg border-slate-300 py-2 px-2 w-full"
                  placeholder="Username or email"
                />
                <div className=" flex gap-3 mt-3">
                  <input
                    type="text"
                    className="btnBorder rounded-lg border-slate-300 py-2 px-2 w-full"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="btnBorder rounded-lg border-slate-300 py-2 px-2 w-full"
                    placeholder="Last name"
                  />
                </div>
                <div className="btnBorder rounded-lg  border-slate-300 py-2 px-2 w-full  mt-3 justify-between flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    className=" border-transparent outline-transparent w-full"
                    placeholder="Password"
                  />
                  {showPass ? (
                    <BsEye onClick={() => setShowPass((prev) => !prev)} />
                  ) : (
                    <BsEyeSlash
                      onClick={() => setShowPass((prev) => !prev)}
                      className=" cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <p className=" text-gray-400 mt-8">
              By creating an account, you agreeing to our{" "}
              <span className=" text-black font-bold">Privacy Policy</span>{" "}
              <span className=" text-black font-bold">
                Electronics Communication Policy
              </span>{" "}
              , and .
            </p>
            <button className=" w-full bg-blue-700 rounded-lg p-3 text-white font-semibold mt-8">
              Sign In
            </button>
            <h1 className=" text-center mt-8">
              Already have an account?{" "}
              <span className=" font-bold">Sign In</span>
            </h1>
          </section>
        </section>
      </div>
      <footer className="flex justify-between w-full mt-7 text-gray-500">
        <h1>Privacy Policy</h1>
        <h1>Copyright 2022</h1>
      </footer>
    </div>
  );
}
export { SignUpDetail };
