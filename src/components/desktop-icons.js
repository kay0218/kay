import React from "react";
import '../stylesheets/nav-bg.scss';
import AboutMeBox from "./about-me-box";


function DesktopIcons() {
    return (
        <div>
            <div className="icon-one">
                <button onClick={AboutMeBox} cursor="pointer" >
                    <img id="desktop-icons" src="../images/about-me-icon.png" alt="Icon for about me modal" />
                    <br />
                    <p id="desktop-p-one" >About Me</p>
                </button>
            </div>
            <br />
            <a target="_blank" href="https://kay0218.github.io/RED/" rel="noreferrer">
                <div className="icon-two">
                    <img id ="desktop-icons" src="../images/red-icon.png" alt="icon for my first webpage" />
                    <br />
                    <p id="desktop-p-two">RED</p>
                </div>
            </a>
        </div>
    );
}

export default DesktopIcons;