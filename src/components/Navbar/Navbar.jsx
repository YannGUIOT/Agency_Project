import {Link} from 'react-router-dom';
import DarkModeButton from '../DarkModeButton/DarkModeButton';


const Navbar = () => {

return (
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
)

}

export default Navbar;