import { IMG_URL } from "../const/config";
import { Link } from "react-router-dom";

const Restaurantcard=({cloudinaryImageId,name,areaName,avgRating,cuisines,id })=>{
  return(
      <Link to={`/menu/${id}`} className="custom-card mb-4 text-decorarion-none text-dark">
          <div className="image">
                < img src={IMG_URL + cloudinaryImageId} alt="restaurants"/>
          </div>
          <div className="content px-3">
              <h4 className="name">{name}</h4>
              <div className="d-flex justify-content-between"><span>⭐{avgRating}</span> <span>25-30 mins</span></div>
              <div className="cuisines">{cuisines.join(" , ")}</div>
              <p>{areaName}</p>
          </div>
      </Link>
  )
}
export default Restaurantcard;                                                                                                                                                                                                                                                                                                              