import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LoggedIn,
  SignIn,
  SignUp,
  ForgotPassword,
  OtpAuth,
} from "../pages/index";
function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/otpauth" element={<OtpAuth />} />
      <Route path="/loggedin" element={<LoggedIn />} />
    </Routes>
  );
}
export { RoutePath };
