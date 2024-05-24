import Navigation from "./carousel";
import Filters from "./filters";
import Searchbar from "./searchbar";
import Cardcontainer from "./cardcomponent";



const Body = () => {
    return(
      <>
      <div className="text-center">this is body </div>
      <Navigation/>
      <div className='d-flex justify-content-between'>
        <Filters/>
        <Searchbar/>
      </div>
      <Cardcontainer/>
      </>
    )
  }

  
export default Body;