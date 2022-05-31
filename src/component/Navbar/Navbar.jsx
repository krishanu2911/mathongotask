import React from "react";

function Navbar({ NavBtn }) {
  return (
    <nav className=" w-full py-4 px-6 bg-gray-900 flex justify-between items-center">
      <img
        src="https://res.cloudinary.com/krishanucloud/image/upload/v1653978742/LogonavbarLogo_vdvi01.png"
        alt="navbar-logo"
      />
      <button className=" text-white bg-blue-700 rounded-lg py-2  px-7 font-semibold">
        {NavBtn}
      </button>
    </nav>
  );
}
export { Navbar };
