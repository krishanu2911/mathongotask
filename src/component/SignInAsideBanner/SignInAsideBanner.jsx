import React from "react";
import style from "./SignInAsideBanner.module.css";
function SignInAsideBanner() {
  return (
    <div className={`${style.asideSection}  min-h-screen relative`}>
      <img style={{
        width: "object-fit"
      }} src="https://res.cloudinary.com/krishanucloud/image/upload/v1653939433/backgroundpattern_s4zzgj.png" alt="" srcset="" />
      {/* <h1>banner</h1> */}
      {/* <img src="https://res.cloudinary.com/krishanucloud/image/upload/v1653951028/signinbanner_kdbxcv.png" className=" absolute top-52 left-6 " alt="" srcset="" /> */}
    </div>
  )
}
export { SignInAsideBanner };
