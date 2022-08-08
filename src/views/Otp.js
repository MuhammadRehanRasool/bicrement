import React from "react";
import OtpSection from "../components/OtpSection";
import Hero from "../components/utils/Hero";

export default function Otp() {
    return (
        <>
          <Hero rightSection={<OtpSection/>} />
        </>
    );
}
