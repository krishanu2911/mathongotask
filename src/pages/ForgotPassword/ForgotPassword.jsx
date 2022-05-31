import React from "react";
import { Navbar } from "../../component/index";
import { Link } from "react-router-dom";
function ForgotPassword() {
  return (
    <div>
      <Navbar NavBtn="Sign In" />
      <section className="w-full min-h-screen bg-slate-300 flex flex-col items-center p-6 justify-between">
        <div className="cardWidth bg-white w-full p-8 rounded-lg flex flex-col justify-center items-center  mt-28 gap-6">
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="text-2xl font-bold">
              Need help with your account?
            </h1>
            <p className="text-center text-gray-500 text-xs">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
          </div>
          <div className=" flex w-full gap-6 justify-center">
            <input
              type="text"
              className="btnBorder rounded-lg border-slate-300 py-2 px-2 w-full"
              placeholder="Email Address"
            />
          </div>
          <Link to="/" className=" text-center  cardBtn py-2 rounded-lg text-white font-semibold bg-blue-700">
            Send Link
          </Link>
          <h1 className=" text-black font-bold text-center">
          Forgot your email?
          </h1>
        </div>
        <footer className="flex justify-between w-full mt-56 text-gray-500">
          <h1>Privacy Policy</h1>
          <h1>Copyright 2022</h1>
        </footer>
      </section>
    </div>
  );
}
export { ForgotPassword };
