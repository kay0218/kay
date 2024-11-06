import * as React from "react";
import { Menu, MenuItem } from "@mui/material";
import { ButtonUnstyled } from "@mui/core";

import "../stylesheets/nav-bg.scss";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonUnstyled
        className="start-btn"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        cursor="pointer"
      >
        <img
          src="../../images/start-icon.png"
          alt="start menu icon"
          id="icons"
        />
        <p>Start</p>
      </ButtonUnstyled>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { p: 0, m: 0, paddingInlineStart: 0, marginBlockStart:0, marginBlockEnd:0 },
        }}
      >
        <MenuItem
          onClick={handleClose}
          className="menuitem"
          style={{
            width: "178px",
            height: "40px",
            left: "2px",
            top: "175px",

            paddingLeft: "20px",

            background: "#D9D9D9",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "#808080",

            cursor: "pointer",
          }}
        >
          <img
            src="../../images/folders-icon.png"
            alt="folders icon"
            id="icons"
          />
          Folder
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="menuitem"
          style={{
            width: "178px",
            height: "40px",
            left: "2px",
            top: "175px",

            paddingLeft: "20px",

            background: "#D9D9D9",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "#808080",

            cursor: "pointer",
          }}
        >
          <img
            src="../../images/x-twitter-icon.svg"
            alt="the new twitter icon"
            id="icons"
          />
          <a
            href="https://twitter.com/seokayy"
            target="_blank"
            rel="noreferrer"
            alt="Link to my X account"
          >
            X
          </a>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="menuitem"
          style={{
            width: "178px",
            height: "40px",
            left: "2px",
            top: "175px",

            paddingLeft: "20px",

            background: "#D9D9D9",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "#808080",

            cursor: "pointer",
          }}
        >
          <img
            src="../../images/linkedin-icon.png"
            alt="linkedin icon"
            id="icons"
          />
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            alt="link to my linkedin"
          >
            Linkedin
          </a>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="menuitem"
          style={{
            width: "178px",
            height: "40px",
            left: "2px",
            top: "175px",

            paddingLeft: "20px",

            background: "#D9D9D9",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "#808080",

            cursor: "pointer",
          }}
        >
          <img
            src="../../images/github-icon.png"
            alt="github icon"
            id="icons"
          />
          <a
            href="https://github.com/kay0218"
            target="_blank"
            rel="noreferrer"
            alt="Link to my github page"
          >
            Github
          </a>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="menuitem bottommenuitem"
          style={{
            width: "178px",
            height: "40px",
            left: "2px",
            top: "175px",

            paddingLeft: "20px",

            background: "#D9D9D9",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: "#808080",

            cursor: "pointer",
          }}
        >
          <img
            src="../../images/log-out-icon.png"
            alt="log out icon"
            id="icons"
          />
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
}
