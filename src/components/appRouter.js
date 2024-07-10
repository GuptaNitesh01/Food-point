import About from './about';
import Cart  from './cart';
import Contact from './contact';
import {createBrowserRouter} from  "react-router-dom";
import Body from './body';
import App from '../App';
import Errorpage from './ErrorPage';
import Menu from './Menu';

const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      errorElement:<Errorpage/>,
      children:[
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>,
        },
        {
          path:"",
          element:<Body/>,
        },
        {
          path:"cart",
          element:<Cart/>,
        },
        {
          path:"menu/:Nitesh",
          element:<Menu/>,
        }
      ]
    },
  ]);

  export default appRouter;            // we can use in other file because of export default