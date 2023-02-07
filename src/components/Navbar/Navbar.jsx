import {Link} from 'react-router-dom';
import DarkModeButton from '../DarkModeButton/DarkModeButton';


const Navbar = () => {

return (
  <div>
    <nav>
      <div>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> L'Agence </Link></li>
          <li><Link to="/works"> Projets </Link></li>
        </ul>
      </div>
      <div>
        <DarkModeButton/>
      </div>
    </nav>
    <div className='logo'>
      <img id="logo" src="../src/assets/img/the-agency-logo.png"/>
    </div>
  </div>
)

}

export default Navbar;