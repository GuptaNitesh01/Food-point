import { useParams } from "react-router-dom";
import { MENU_URL } from "../const/config";
import { useState, useEffect } from "react";
import Resinfo from "./Resinfo";

const Menu = () => {
    const params = useParams();
    console.log("params",params);
    const[menuData, setMenuData] = useState([]);

    useEffect (() => {
        const getRestaurants = async()  =>{
            try{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=9864&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            console.log("json", json?.data?.cards);
            }
          catch(err){
            console.log("something went wrong,err")
          }
        }
        getRestaurants();
    },[])
    return(
      <div>
        <Resinfo
        name="NH1 Bowls - Highway To North"
        avgRating="4.6"
        ratingCount="100+ratins"
        costForTwo="$100 for two"
        cuisines="North-Indian , Punjabi "
        deliveryTime="15-20 min"
        distance="2.0 km"
        remark="Delivery fees applicable. Delivered & Charged by the restaurant."
        />
      </div>
    )
}

export default Menu;