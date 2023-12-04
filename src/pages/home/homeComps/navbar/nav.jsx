import { useState } from "react";
import "./nav.css";
import logo from './logo.png';
import navImg from './nav-img.png'
 
export const Nav = ({ onButtonClick }) => {
    const handleButtonClick = (component) => {
      onButtonClick(component);
    };

    return (
        <div className="nav-body">

          <div className="header-body">
             <img className="logoImg" src = {logo} alt ="" />
             <div className="nav-items">
                <span className="nav-item">Search</span>
                <span className="nav-item">About Us</span>
                <span className="nav-item">Sign up</span>
                <span className="nav-item">Log in</span>
             </div>  
          </div>

          <div className="nav-child">

            <div className="child-l">
                <div className="l-upr">
                    <span className="msg">The Modern Solutions For Influencer Marketing <span className="clr-msg"> We Connect Creators And Brands.</span> </span> 
                </div>
                <div className="l-lower">
                    <button  className="brand" id="brand" onClick={() => handleButtonClick('brand')}>I'm a brand</button>
                    <button  className="creator" id="creator" onClick={() => handleButtonClick('creator')}>I'm a creator</button>
                </div>
            </div>

            <div className="child-r">
                <div><img className="nav-img" src={navImg} alt="" /> </div>
            </div>
          </div>
        </div>
    )
}