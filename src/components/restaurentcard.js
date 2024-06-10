import { IMG_URL } from "../const/config";

const Restaurantcard=({cloudinaryImageId,name,areaName,avgRating,cuisines })=>{
  return(
      <div className="custom-card mb-4">
          <div className="image">
                < img src={IMG_URL + cloudinaryImageId} alt="restaurants"/>
          </div>
          <div className="content px-3">
              <h4 className="name">{name}</h4>
              <div className="d-flex justify-content-between"><span>⭐{avgRating}</span> <span>25-30 mins</span></div>
              <div className="cuisines">{cuisines.join(" , ")}</div>
              <p>{areaName}</p>
          </div>
      </div>
  )
}
export default Restaurantcard;