 import classes from './nav-bg.modules.css';
 import { Button } from '../../node_modules/@mui/base/ButtonUnstyled';

 
function Nav() {
    return (
        <nav>
            <div class="nav-bg">
                {/* <button class="start-btn">Start</button>
                <button class="time-tab">11:26</button> */}
                <buttonUnstyledClasses className="start-btn">Start</buttonUnstyledClasses>
                <buttonUnstyledClasses className="time-tab">11:26</buttonUnstyledClasses>
            </div>
        </nav>
    );
};

export default Nav;
        
        