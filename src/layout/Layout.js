import React, { useState } from "react";
import NavbarPrimary from "../components/utils/NavbarPrimary";

export default function Layout(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className=" px-3 md:px-0 w-[96%] max-w-7xl mx-auto min-h-screen pb-20 md:pb-0">
        {/*==========  Navbar ========== */}

        {props.logo ? (
          <NavbarPrimary
            logo="true"
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <NavbarPrimary />
        )}

        {props.children}
      </div>
    </>
  );
}
