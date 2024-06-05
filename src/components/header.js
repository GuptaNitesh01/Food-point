import Logo from '../assets/images/headerlogo1.jpg';

const Header = () => {
    return(
      <>
      <nav className ="navbar navbar-expand-sm bg-light navbar-light ">
      <div className ="container-fluid">
        <a className ="navbar-brand" href="#">
          <img src = {Logo} width="120px" height="70px" />
          </a>
        <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
          <ul className ="navbar-nav">
            <li className ="nav-item">
              <a className ="nav-link" href="#"> Home🏠</a>
            </li>
            <li className ="nav-item">
              <a className ="nav-link" href="#">About us 😶‍🌫️</a>
            </li>
            <li className ="nav-item">
              <a className ="nav-link" href="#">Contact us 📞 </a>
            </li>    
            <li className ="nav-item">
              <a className ="nav-link" href="#"> Cart 🛒</a>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
      </>
      );
    } 

    export default Header;