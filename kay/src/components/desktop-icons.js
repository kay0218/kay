import React from "react";
import classes from './start-menu.modules.css';


function DesktopIcons() {
    return (
        <div>
            <div className="icon-one">
                <img id="desktop-icons" src="../images/about-me-icon.png" />
                <br />
                <p id="desktop-p-one" >About Me</p>
            </div>
            <br />
            <div className="icon-two">
                <img id ="desktop-icons" src="../images/red-icon.png" />
                <br />
                <p id="desktop-p-two">RED</p>
            </div>
        </div>
    );
}

export default DesktopIcons;