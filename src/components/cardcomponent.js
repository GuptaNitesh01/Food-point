import Restaurantcard from "./restaurentcard";
import { restaurantList } from "../const/config";
import { useState } from "react";
// import { useEffect } from "react";

const Cardcomponent = () => {
  const [restaurantData,setRestaurantData] = useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
  console.log(
    "restaurantList",
    restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
    // setRestaurantData(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    const filterrestaurant = () => {
      const restaurants = restaurantData.filter((restaurant) => {
        return(
          restaurant?.info?.avgRating >= 4.5
        )   
      })
      setRestaurantData(restaurants);
    }

  return (
    <>
    <div className="button">
      <button onClick={filterrestaurant}> Top Rated Restaurant</button>
      </div>
    <div className="container d-flex flex-wrap gap-4">
      {restaurantData.map((restaurant) => {
        return (
          <Restaurantcard
          key = {restaurant?.info?.id}
            // imgUrl={IMG_URL + restaurant?.info?.cloudinaryImageId}
            // title={restaurant?.info?.name}
            // starRating={restaurant?.info?.avgRating}
            // deliveryTime={restaurant?.info?.sla?.deliveryTime}
            // cuisines={restaurant?.info?.cuisines.join(", ")}
            // location={restaurant?.info?.areaName}
            {...restaurant?.info}
          />
        );
      })}
    </div>
    </>
  );
};

export default Cardcomponent;