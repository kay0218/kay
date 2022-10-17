import React from "react";

import classes from './kay-logo.modules.css';


function KayLogo() {
    return (
        <div>
            <img src={require("./kay-logo.png")} className="kay-logo" />
            <a target="_blank" href="https://open.spotify.com/track/6xLm5hdcUTmZPWUzPnQ9US?si=5ce1f4e897244863">
                <p className="intro">Intro</p>
            </a>
            <p className="kadijah">KADIJAH</p>
            <p className="year">94</p>
        </div>
    );
}

export default KayLogo;