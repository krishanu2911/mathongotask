import React from "react";
import style from "./SignInDetail.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash } from "react-icons/bs";
function SignInDetail() {
  return (
    <div className="flex flex-col  p-6 min-h-screen h-full justify-between">
      <div className="flex flex-col gap-32">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/krishanucloud/image/upload/v1653943763/overpaylogo_frt5qm.png"
            alt="overpay-logo"
          />
        </div>
        <div className=" flex flex-col justify-between items-center">
          <section
            className={`${style.signInputSection} flex flex-col gap-6 w-full`}
          >
            <header className="text-center flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Sign in to Overpay</h1>
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
                  <div className="btnBorder rounded-lg  border-slate-300 py-2 px-2 w-full  mt-3 justify-between flex items-center">
                    <input
                      type="password"
                      className=" border-transparent outline-transparent w-full"
                      placeholder="Password"
                    />
                    <BsEyeSlash className=" cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-between mt-5">
                <div className=" flex gap-2 items-center">
                  <input type="checkbox" className=" rounded-full" />
                  <label htmlFor="">Remember me</label>
                </div>
                <h1 className=" text-blue-700 font-semibold">
                  Forgot Password?
                </h1>
              </div>
              <button className=" w-full bg-blue-700 rounded-lg p-3 text-white font-semibold mt-8">
                Sign In
              </button>
              <h1 className=" text-center mt-8">Don't have an account? <span className=" font-bold">Sign Up</span> </h1>
            </section>
          </section>
        </div>
      </div>
      <footer className="flex justify-between w-full mt-7 text-gray-500">
        <h1>Privacy Policy</h1>
        <h1>Copyright 2022</h1>
      </footer>
    </div>
  );
}
export { SignInDetail };
