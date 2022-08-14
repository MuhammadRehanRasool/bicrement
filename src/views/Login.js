import React from "react";
import LoginSection from "../components/LoginSection";
import Hero from "../components/utils/Hero";

export default function Login({isLoggedIn, setIsLoggedIn}) {
  console.log(setIsLoggedIn)
    return (
        <>
          <Hero rightSection={<LoginSection isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} />} />
        </>
    );
}
