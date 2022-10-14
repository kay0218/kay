import * as React from 'react';
// import Button from '../../node_modules/@mui/base/ButtonUnstyled';
import Menu from '../../node_modules/@mui/base/MenuUnstyled';
import MenuItem from '../../node_modules/@mui/base/MenuItemUnstyled';

import classes from './start-menu.modules.css';

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
        <buttonUnstyledClasses 
        className="start-btn"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
          Start
        </buttonUnstyledClasses>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
        <MenuItem onClick={handleClose} className="menuitem">
          <img src='../../images/folders-icon.png' alt='folders icon'/>
          Folder
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuitem">
        <a href='https://twitter.com/seokayy' target='_blank' alt='Link to my twitter account'>
        <img src='../../images/twitter-icon.png' alt='twitter icon'/>
          Twitter
        </a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuitem">
        <a href='https://www.linkedin.com/feed/' target='_blank' alt='link to my linkedin'>
        <img src='../../images/linkedin-icon.png' alt='linkedin icon'/>
          Linkedin
        </a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuitem">
        <a href='https://github.com/kay0218' target='_blank' alt='Link to my github page'>
        <img src='../../images/github-icon.png' alt='github icon'/>
          Github
        </a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuitem bottommenuitem">
        <img src='../../images/log-out-icon.png' alt='log out icon'/>
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
}
