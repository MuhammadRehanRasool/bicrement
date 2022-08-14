import React from "react";
import LoginExplore from "../components/LoginExplore";
import Hero from "../components/utils/Hero";

export default function Home() {
    return (
        <>  
            <Hero rightSection={<LoginExplore/>} />
        </>
    );
}
