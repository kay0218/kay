import DesktopIcons from './components/desktop-icons';
import KayLogo from './components/kay-logo';
import classes from './stylesheets/stylesheet.css';
import Nav from './ui/nav-bg';


function App() {
  return (
    <div className="App">
      <DesktopIcons />
      <KayLogo />
      <Nav />
    </div>
  );
}

export default App;
