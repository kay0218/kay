import '../stylesheets/nav-bg.scss';
import BasicMenu from '../components/start-menu';
import { ButtonUnstyled } from '@mui/core';



 
function Nav() {
    return (
        <nav>
            <div className="nav-bg">
                <BasicMenu />
                <ButtonUnstyled className="time-tab">11:26</ButtonUnstyled>
            </div>
        </nav>
    );
};

export default Nav;
        
        