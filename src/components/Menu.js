import { useParams } from "react-router-dom";
import { MENU_URL } from "../const/config";
import { useState, useEffect } from "react";
import Resinfo from "./Resinfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";

const Menu = () => {
//     const params = useParams();
//     console.log("params",params);
    const{id} = useParams;
    const[menuData, setMenuData] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect (() => {
        const getRestaurants = async()  =>{
            try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await data.json();
            setLoading(false)
            setMenuData(json?.data?.cards)
            console.log("json", json?.data?.cards[4]?.groupedCard?.cardGroupedMap?.REGULAR?.cards);
            }
          catch(err){
            console.log("something went wrong,err")
          }
        }
        getRestaurants();
    },[])

    if(loading){
        return (
          <div className="container d-flex flex-wrap gap-4">
              <shimmer/>
          </div>
        )
    }
    const menuCategory = menuData[4]?.groupedCard?.cardGroupedMap?.REGULAR?.cards


    const normalMenu = menuCategory.filter((menuCategory) => {
      return(
         menuCategory?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

    const nestedMenu = menuData.filter((menuCategory) => {
      return(
         menuCategory?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });

    console.log("normal menu",normalMenu);
    console.log("nested menu",nestedMenu);


    const {name,avgRating,totalRatingString,costForTwoMessage,cuisines,sla,expectationNotifiers} = menuData[2]?.card?.card?.info
    const{slaString, lastMileTravelString} = sla                                                          
    const {enrichedText}  = expectationNotifiers[0]

    return(
      <div className="menu_container">
        <Resinfo
        name={name}
        avgRating={avgRating}
        ratingCount={totalRatingString}
        costForTwo={costForTwoMessage}
        cuisines={cuisines.join(", ")}
        deliveryTime={slaString}
        distance={lastMileTravelString}
        remark={enrichedText}
        />
        <div className="p-3">
          {
            normalMenu.map((normalCategory) => {
                return(
                  <>
                    <h6 key={normalCategory?.card?.card?.title}>
                    {normalCategory?.card?.card?.title}
                  </h6>
                  {
                    normalCategory?.card?.card?.itemCards.map((dish)=>{
                      return(
                        <>
                        <MenuSection
                        isVeg = {dish?.card?.info?.isVeg} 
                        name = {dish?.card?.info?.name}
                        costForTwo = {dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100} 
                        avgRating = {dish?.card?.info?.ratings?.aggregratedRating?.rating}
                        ratingCount = {dish?.card?.info?.ratings?.aggregratedRating?.ratingCount}
                        description = {dish?.card?.info?.description}
                        imageUrl = {dish?.card?.info?.imageId}
                        />
                        <hr/>
                        </>
                    )
                    })
                  }
                  </>
                )
            })
          }
        </div>
        <div>
          {
            nestedMenu.map((category) => {
              return(
                <div>
                <h4>{category?.card?.card?.title}</h4>
                {
                    category?.card?.card?.categories.map((subCategory) => {
                      return (
                        <>
                           <h5 className="text-secondary">{subCategory?.title}</h5>
                        {
                            subCategory?.itemCards?.map((dish) => {
                              return(
                              <MenuSection
                                isVeg = {dish?.card?.info?.isVeg} 
                                name = {dish?.card?.info?.name}
                                costForTwo = {dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100} 
                                avgRating = {dish?.card?.info?.ratings?.aggregratedRating?.rating}
                                ratingCount = {dish?.card?.info?.ratings?.aggregratedRating?.ratingCount}
                                description = {dish?.card?.info?.description}
                                imageUrl = {dish?.card?.info?.imageId}
                                />                               
                              )
                            })
                        }
                        </>
                      )
                    })
                }
                </div>
              )
            })
          }
        </div>
      </div>
    )
}

export default Menu;
