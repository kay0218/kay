import React from "react";
import classes from './start-menu.modules.css';
import AboutMeBox from "./about-me-box";


function DesktopIcons() {
    return (
        <div>
            <div className="icon-one">
                <button onClick={AboutMeBox} >
                    <img id="desktop-icons" src="../images/about-me-icon.png" />
                    <br />
                    <p id="desktop-p-one" >About Me</p>
                </button>
            </div>
            <br />
            <a target="_blank" href="https://kay0218.github.io/RED/">
                <div className="icon-two">
                    <img id ="desktop-icons" src="../images/red-icon.png" />
                    <br />
                    <p id="desktop-p-two">RED</p>
                </div>
            </a>
        </div>
    );
}

export default DesktopIcons;