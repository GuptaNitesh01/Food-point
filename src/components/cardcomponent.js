import Restaurantcard from "./restaurentcard";
import { restaurantList } from "../const/config";
import { useEffect, useState } from "react";

const Cardcomponent = () => {
  const [restaurantData,setRestaurantData] = useState([]);
  
    const getRestaurants = async()  =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() =>{
      getRestaurants(); 
    },[])

    console.log("is render ");

  return (
    <div>
      <div className="container my-3">
        <input type="text" className="custom-input" placeholder="Enter name of restaurant "/>
        <button className="btn btn-light">🔍</button>
      </div>
    <div className="container d-flex flex-wrap gap-4">
      {restaurantData.map((restaurant) => {
        return (
          <Restaurantcard
          key = {restaurant?.info?.id}
            {...restaurant?.info}
          />
        );
      })}
    </div>
    </div>
  );
};
export default Cardcomponent;
