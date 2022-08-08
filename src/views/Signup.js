import React from "react";
import SignupSection from "../components/SignupSection";
import Hero from "../components/utils/Hero";

export default function Signup() {
    return (
        <>
          <Hero rightSection={<SignupSection/>} />
        </>
    );
}
