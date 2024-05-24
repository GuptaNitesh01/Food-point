//import logo from './logo.svg';
import './App.css';
import logo from "./assets/images/headerlogo.jpg";

import Header from "./components/header";
import Body from "./components/body";
import {Footer} from "./components/Footer";


// const Header = () => {
// return(
//   <>
//   <nav className ="navbar navbar-expand-sm bg-light navbar-light ">
//   <div className ="container-fluid">
//     <a className ="navbar-brand" href="#">
//       <img src={logo} width="120px" height="70px" />
//       </a>
//     <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//       <span className ="navbar-toggler-icon"></span>
//     </button>
//     <div className ="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
//       <ul className ="navbar-nav">
//         <li className ="nav-item">
//           <a className ="nav-link" href="#"> Home🏠</a>
//         </li>
//         <li className ="nav-item">
//           <a className ="nav-link" href="#">About us 😶‍🌫️</a>
//         </li>
//         <li className ="nav-item">
//           <a className ="nav-link" href="#">Contact us 📞 </a>
//         </li>    
//         <li className ="nav-item">
//           <a className ="nav-link" href="#"> Cart 🛒</a>
//         </li>   
//       </ul>
//     </div>
//   </div>
// </nav>
//   </>
//   );
// } 

// const Carousel = () => {
//   return(
//     <div className='text-center'> this is caraousel</div>
//   )
// }

// const Filters = () => {
//   return(
//     <div className='text-center'>this is filters </div>
//   )
// }

// const Searchbar = () => {
//   return(
//     <div className='text-center'> this is searchbar</div>
//   )
//   }

//   const Restaurantcard = () => {
//     return(
//       <div className='text-center'> this is restaurant card </div>
//     )
//     }

// const Cardcontainer = () => {
//   return(
//     <> 
//     <p className='text-center'> this is cardcontainer </p>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     <Restaurantcard/>
//     </>
//   )
// }

// const Body = () => {
//   return(
//     <>
//     <div className='text-center bg-danger'>this is body one </div>
//     <Carousel/>
//     <div className='d-flex justify-content-between'>
//       <Filters/>
//       <Searchbar/>
//     </div>
//     <Cardcontainer/>
//     </>
//   )
// }

// const Footer = () => {
//   return(
//     <div className='text-center bg-primary'> this is footer </div>
//   )
// }

const App = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
     
  );
}

export default App;