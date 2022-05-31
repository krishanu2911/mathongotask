import React from "react";
import { SignUpAsideBanner, SignUpDetail } from "../../component/index";
import style from "./SignUp.module.css";
function SignUp() {
  return (
    <div className={`${style.signUp}`}>
      <SignUpAsideBanner />
      <SignUpDetail />
    </div>
  );
}
export { SignUp };
