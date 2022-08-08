import React from "react";
import LoginSection from "../components/LoginSection";
import Hero from "../components/utils/Hero";

export default function Login() {
    return (
        <>
          <Hero rightSection={<LoginSection/>} />
        </>
    );
}
