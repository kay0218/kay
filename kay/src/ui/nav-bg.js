 import classes from './nav-bg.modules.css';
 import { Button } from '../../node_modules/@mui/base/ButtonUnstyled';
import BasicMenu from '../components/start-menu';

 
function Nav() {
    return (
        <nav>
            <div class="nav-bg">
                {/* <button class="start-btn">Start</button>
                <button class="time-tab">11:26</button> */}
                <BasicMenu>
                    <buttonUnstyledClasses className="start-btn">Start</buttonUnstyledClasses>
                </BasicMenu>
                <buttonUnstyledClasses className="time-tab">11:26</buttonUnstyledClasses>
            </div>
        </nav>
    );
};

export default Nav;
        
        