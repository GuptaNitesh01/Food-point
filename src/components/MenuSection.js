import { IMG_URL } from "../const/config";

const MenuSection = (isVeg,name,costForTwo,avgRating,ratingCount,description,imageUrl) => {
    return(
        <div className="d-flex justify-content-between">
            <div>
                <p> {isVeg? "🟢":"🔴" }</p>
                <h6>{name}</h6>
                <h6> Rs. {costForTwo}</h6>
                <p className="text-success">⭐{avgRating} <span className="text-danger">({ratingCount})</span></p>
                <p className="text-secondary">{description}</p>
                {/* <use xlink:href="/food/sprite-1915a9c6.svg#nonvegNonVeg16"></use> */}
            </div>
            <div>
                <img style={{width:"150px", height:"150px", objectFit:"cover"}} src={IMG_URL+imageUrl}/>
            </div>
        </div>
    )
}

export default MenuSection;