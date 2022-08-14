import React from "react";
import { Link } from "react-router-dom";

const NavbarPrimary = (props) => {
  return (
    <div className="flex justify-end items-center space-x-3 py-3 h-[4rem] ">
      {props.logo && (
        <Link to="/" className="justify-self-start ">
          <h1 className="text-2xl text-logo">
            myfort.<span className="text-yellows-dark">io</span>
          </h1>
        </Link>
      )}
      {!props.isLoggedIn ? (
        <>
          <div className="flex-grow text-right space-x-3">
            <Link to="#">
              <span className="text-logo">About us</span>
            </Link>
            <Link to="/Contact">
              <span className="text-logo">Contact us</span>
            </Link>
          </div>
        </>
      ) : (
        <div className="flex-grow text-right space-x-3">
          
            <span className="text-logo cursor-pointer" onClick={()=>props.setIsLoggedIn(false)}>Sign out</span>
          
        </div>
      )}
    </div>
  );
};

export default NavbarPrimary;
