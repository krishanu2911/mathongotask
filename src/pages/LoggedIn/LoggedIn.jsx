import React from "react";
import { Navbar } from "../../component/index";
import { Link } from "react-router-dom";
function LoggedIn() {
  return (
    <div>
      <Navbar NavBtn="Log Out" />
      <section className="w-full min-h-screen bg-slate-300 flex flex-col items-center p-6 justify-between">
        <div className="cardWidth bg-white w-full p-8 rounded-lg flex flex-col justify-center items-center  mt-28 gap-6">
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="text-2xl font-bold">
            Hi, Johne Doe!
            </h1>
            <p className="text-center text-gray-500 text-xs">
            You’re logged in. Well done!
            </p>
          </div>
          <Link to="/" className="text-center cardBtn py-2 rounded-lg text-white font-semibold bg-blue-700">
            Log Out
          </Link>
        </div>
        <footer className="flex justify-between w-full mt-56 text-gray-500">
          <h1>Privacy Policy</h1>
          <h1>Copyright 2022</h1>
        </footer>
      </section>
    </div>
  );
}
export { LoggedIn };
