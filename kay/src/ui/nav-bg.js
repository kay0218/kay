 import './nav-bg.scss';
import BasicMenu from '../components/start-menu';

 
function Nav() {
    return (
        <nav>
            <div class="nav-bg">
                <BasicMenu />
                <buttonUnstyledClasses className="time-tab">11:26</buttonUnstyledClasses>
            </div>
        </nav>
    );
};

export default Nav;
        
        