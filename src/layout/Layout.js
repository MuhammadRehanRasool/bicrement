import React from "react";
import NavbarPrimary from "../components/utils/NavbarPrimary";

export default function Layout(props) {
    return (
        <>
            <div className="w-11/12 max-w-7xl mx-auto min-h-screen">
                {/*==========  Navbar ========== */}

                {props.logo ? <NavbarPrimary logo="true" /> : <NavbarPrimary />}

                {props.children}
            </div>
        </>
    );
}
