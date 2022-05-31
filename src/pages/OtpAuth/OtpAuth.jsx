import React from "react";
import { Navbar } from "../../component/index";
import { useNavigate } from "react-router-dom";
function OtpAuth() {
  const dummyArray = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    navigate("/loggedin");
  }
  return (
    <div>
      <Navbar NavBtn="Sign In" />
      <section className=" w-full min-h-screen bg-slate-300 flex flex-col items-center p-6 justify-between">
        <div className="cardWidth bg-white w-full p-8 rounded-lg flex flex-col justify-center items-center  mt-28 gap-6">
          <div className=" flex flex-col items-center">
            <h1 className=" text-2xl font-bold">Verify your email</h1>
            <p className=" text-gray-500 text-xs">
              We have sent code to your email
            </p>
            <h1 className=" text-sm">alesiaka******@mail.com</h1>
          </div>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className=" flex w-full gap-6 justify-center mb-4">
              {dummyArray.map((item) => {
                return (
                  <input
                    type="text"
                    className="btnBorder rounded-lg border-slate-300 w-10 h-10 text-center"
                    maxLength="1"
                    required
                  />
                );
              })}
            </div>
            <button className="  cardBtn py-2 rounded-lg text-white font-semibold bg-blue-700 text-center">
              Verify Account
            </button>
          </form>
          <h1 className=" text-gray-600 text-center">
            Resend code in <span className=" text-black font-bold">59:00</span>{" "}
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
export { OtpAuth };
