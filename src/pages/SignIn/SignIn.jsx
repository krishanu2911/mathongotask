import React from "react";
import { SignInDetail, SignInAsideBanner } from "../../component/index";
import style from "./SignIn.module.css";
function SignIn() {
  return (
    <div className={`${style.signIn}`}>
      <SignInDetail />
      <SignInAsideBanner />
    </div>
  );
}
export { SignIn };
