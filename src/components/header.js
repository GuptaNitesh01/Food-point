import Logo from '../assets/images/logo .png';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
      <>
      <nav className ="navbar navbar-expand-sm bg-info navbar-light ">
      <div className ="container-fluid">
        <a className ="navbar-brand" href="#">
          <img src = {Logo} width="150px" height="70px" />
          </a>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
          <ul className ="navbar-nav">
            <li className ="nav-item">
              <Link to className ="nav-link"> Home🏠</Link>
            </li>
            <li className ="nav-item">
              <Link className ="nav-link" to="/about">About us 😶‍🌫️</Link>
            </li>
            <li className ="nav-item">
              <Link className ="nav-link" to="/contact">Contact us 📞 </Link>
            </li>    
            <li className ="nav-item">
              <Link className ="nav-link" to="/cart"> Cart 🛒</Link>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
      </>
      );
    } 

    export default Header;