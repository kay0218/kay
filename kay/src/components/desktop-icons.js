import React from "react";
import '../ui/nav-bg.scss';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function DesktopIcons() {
    const [open, setOpen] = React.useState(false);
  
    const handleDialogOpen = () => {
      setOpen(true);
    };
  
    const handleDialogClose = () => {
      setOpen(false);
    };
    return (
        <div>
            <div className="icon-one">
                <button onClick={handleDialogOpen} cursor="pointer" >
                    <img id="desktop-icons" src="../images/about-me-icon.png" alt="Icon for about me modal" />
                    <br />
                    <p id="desktop-p-one" >About Me</p>
                </button>
                <Dialog open={open}>
                    <DialogTitle>About Me!</DialogTitle>
                    <p>lorem ipsum blah blah blah</p>
                    <button onClick={handleDialogClose}>Close</button>
                </Dialog>
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