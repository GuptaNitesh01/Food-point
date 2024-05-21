
import Carousel from "./carousel"
import Filters from "./filters"
import Searchbar from "./searchbar"
import Cardcontainer from "./Cardcontainer"

const Body=()=>{
    return(
        <>
            <p className="text-center">This is body</p>
            <Carousel/>
            <div className="d-flex justify-content-between ps-2 pe-2">
                <Filters/>
                <Searchbar/>
            </div>
            <Cardcontainer/>

        </>
    )
}

export default Body