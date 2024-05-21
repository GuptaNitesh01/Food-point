//import logo from './logo.svg';
import './App.css';
import logo from "./assets/images/header_logo.jpg"

const App = () => {
  return (
    <>
    <Header/>
    <body/>
    <footer/>
    </>
     
  );
}

export default App;


// body::::
// import Carousel from "./Carousel.jsx"
// import Filters from "./Filters.jsx"
// import Searchbar from "./Searchbar.jsx"
// import Cardcontainer from "./Cardcontainer"

// const Body=()=>{
//     return(
//         <>
//             <p className="text-center">This is body</p>
//             <Carousel/>
//             <div className="d-flex justify-content-between ps-2 pe-2">
//                 <Filters/>
//                 <Searchbar/>
//             </div>
//             <Cardcontainer/>

//         </>
//     )
// }

// export default Body

// cardcomponent::::::::::
// import Restaurantcard from "./Restaurantcard"

// const Cardcontainer = () => {
//   return (
//     <>
//         <p className="text-center">This is Card container</p>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//         <Restaurantcard/>
//     </>
//   )
// }

// export default Cardcontainer

// carousel::::
// const Carousel=()=>{
//   return(
//       <>
//           <p className="text-center">This is Carousel</p>
          
//       </>
//   )
// }

// export default Carousel

// filters::::::
// const Filters=()=>{
//   return(
//       <>
//           <p>This is Filter</p>
//       </>
//   )
// }

// export default Filters

// footers::::
// const Footer=()=>{
//   return(
//       <>
//           <div className="Footer bg-dark p-2 position-absolute bottom-0 w-100 text-white d-flex justify-content-around align-items-center">
//               <div className="text-start">
//                   <h3>Eat-Fit</h3>
//                   <p className="text-light">eat-fit@gmail.com</p>
//               </div>
//               <div className="text-start">
//                   <h4>Company</h4>
//                   <p className="text-light">About</p>
//                   <p className="text-light">Career</p>
//               </div>
//               <div className="text-start">
//                   <h4>Contact Us</h4>
//                   <p className="text-light">Help & Support</p>
//                   <p className="text-light">Partner with us</p>
//               </div>
//           </div>
//       </>
//   )
// }
// export default Footer

// header::;
// import logo from "../Assets/Images/Logo.png"
// import eaifit from "../Assets/Images/EatFit.png"
// const Header=()=>{
//    // let logo=`https://in.images.search.yahoo.com/images/view;_ylt=Awrx_e1WtUhmyU8uhoq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgxZDk4OTAwOTg0YjM5MjI3YzNjNWUxM2FlZDNlMWE2BGdwb3MDNDMEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogo%2Brelated%2Bto%2Beat%2Bfit%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D43&w=1500&h=1500&imgurl=lookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D446612994160454&rurl=https%3A%2F%2Fwww.facebook.com%2Featfit.tn%2F&size=30.1KB&p=logo+related+to+eat+fit&oid=81d98900984b39227c3c5e13aed3e1a6&fr2=piv-web&fr=mcafee&tt=Eat%26Fit+%7C+La+Soukra&b=0&ni=21&no=43&ts=&tab=organic&sigr=G3DLv4dOu9AK&sigb=4TgQcvssawc4&sigi=KKE2SVS4Lk6G&sigt=5K3conZGF2fP&.crumb=oVioWVyBe.y&fr=mcafee&fr2=piv-web&type=E211IN714G0`
//     return(
//         <>
//             <nav className="navbar navbar-expand-sm bg-light navbar-light">
//             <div className="container-fluid px-2">
//                 <a className="navbar-brand" href="#"><img src={eaifit} style={{width:"100px"}}/></a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//                 <ul className="navbar-nav">
//                     <li className="nav-item ">
//                     <a className="nav-link">Home</a>
//                     </li>
//                     <li className="nav-item ">
//                     <a className="nav-link">About</a>
//                     </li>
//                     <li className="nav-item ">
//                     <a className="nav-link">Contact Us</a>
//                     </li>  
//                     <li className="nav-item ">
//                     <a className="nav-link">Cart🛒</a>
//                     </li>  
//                     {/* <li className="nav-item  dropdown">
//                     <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Dropdown</a>
//                     <ul className="dropdown-menu">
//                         <li><a className="dropdown-item">Link</a></li>
//                         <li><a className="dropdown-item">Another link</a></li>
//                         <li><a className="dropdown-item">A third link</a></li>
//                     </ul>
//                     </li> */}
//                 </ul>
//                 </div>
//             </div>
//             </nav>
//         </>
//     )
// }

// export default Header

// restaurentcard:::::::;
// const Restaurantcard=()=>{
//   return(
//       <>
//           <p className="text-center">This is restaurant card</p>
//       </>
//   )
// }
// export default Restaurantcard

// searchbar:::::::::
// const Searchbar=()=>{
//   return(
//       <>
//           <p>This is searchbar</p>
//       </>
//   )
// }
// export default Searchbar
