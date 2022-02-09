import React from "react";
import "./Header.css";
import MTime from "../Time/Time";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_logo">
        <div className="Header_logo_img">
          <img className="Header_logo_img_i" src="./Images/Logo.png"  alt="header_logo"/>
        </div>
        
        <div className="Header_logo_text">DAY BOOK+</div>
      
        <div><MTime /></div>
      </div>
  
    </div>
  );
};

export default Header;

