import React from "react";
import { SignInDetail, SignInAsideBanner } from "../../component/index";
import style from "./SignIn.module.css"
function SignIn() {
  return (
    <div className={`${style.signIn}`}>
      <section className={`${style.signInDetailSection}  `}>
        <SignInDetail />
      </section>
      <section className={`${style.signInBanner}`}>
      <SignInAsideBanner />
      </section>
    </div>
  );
}
export { SignIn };
