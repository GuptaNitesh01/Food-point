import Restaurantcard from "./restaurentcard";
import errorimg from "../assets/images/errorimage.png";
import { restaurantList } from "../const/config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Cardcomponent = () => {
  const[count,setCount] = useState(0);
  const [restaurantData,setRestaurantData] = useState([]);
  const [loading,setLoading] = useState(true) 
  const [restaurantCollection,setRestaurantCollection] = useState([]);
  const [searchtext,setSearchText] = useState("");
  const [isfailed,setIsFailed] = useState(false);
  console.log("restaurantList",restaurantData);

    const handleSearchText = (event) => {
      console.log("function is called ",searchtext);
      setSearchText(event.target.value);
    }

    const filterData = () => {
         const filteredData = restaurantCollection.filter((restaurant) => {
          return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
         })
         console.log("filtered data ",filteredData);
         setRestaurantData(filteredData);
      }

      const handleDelivery = () =>{
        const filteredData = restaurantCollection.filter((restaurant) => {
          return restaurant?.info?.sla?.deliveryTime <=30
         })
         setRestaurantData(filteredData);
      }

      const handleVeg = () =>{
        const filteredData = restaurantCollection.filter((restaurant) => {
          return restaurant?.info?.veg
         })
         setRestaurantData(filteredData);
      }

      const handleRating = () =>{
        const filteredData = restaurantCollection.filter((restaurant) => {
          return restaurant?.info?.avgRating >= 4.5
         })
         setRestaurantData(filteredData);
      }

      const reset = () =>{
        setRestaurantData( restaurantCollection)
      }
    useEffect(() =>{
      const getRestaurants = async()  =>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setLoading(false);
        console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
      catch(err){
        setLoading(false)
        setIsFailed(true)
        console.log("something went wrong,err")
      }
    }
      getRestaurants(); 
    }, [])

    console.log("Component is render ");


    if(loading){
      return (
        <div className="container d-flex flex-wrap gap-4">
      <Shimmer/>
      </div>
      )
    }

    if(isfailed){
      return(
        <div>
          <img src={errorimg}/>
          
        </div>
      )
    }

  return (
    <div>
      <div className="d-flex justify-between">
      <div className="container my-3">
        <input type="text" className="custom-input" placeholder="Enter name of restaurant " value={searchtext}
        onChange={handleSearchText}/>
        <button className="button btn-warning" onClick={filterData}>🔍</button>
      </div>
      <div className="filter_btn">
      <button className="btn btn-sm btn-danger " onClick={handleDelivery}>Fast Delivery</button>
      <button className="btn btn-sm btn-danger " onClick={handleRating}>Top Rated</button>
      <button className="btn btn-sm btn-danger " onClick={handleVeg}>Pure Veg</button>
      <button className="btn btn-sm btn-danger " onClick={reset}>Show All</button>
      </div>
      </div>
    <div className="container d-flex flex-wrap gap-4">
      { restaurantData.length!==0 ? restaurantData.map((restaurant) => {
        return (
          <Restaurantcard
          key = {restaurant?.info?.id}
            {...restaurant?.info}
          />
        );
      }) : <h1> NO RESTAURANT FOUND </h1>}
    </div>
    </div>
  );
};
export default Cardcomponent;
