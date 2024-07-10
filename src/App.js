import logo from './logo.svg';
import "./App.css";
import Logo from "./assets/images/logo .png";

// import About from './components/about';
// import Card from './components/card';
// import Contact from './components/contact';
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/FooterComponent";
import { Outlet, RouterProvider } from 'react-router-dom';

  
const App = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <RouterProvider router={appRouter} /> */}
    <Footer/>
    </>
     
  );
}

export default App;