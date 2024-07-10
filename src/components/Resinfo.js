const Resinfo = ({name ,avgRating,cuisines,deliveryTime,distance,costForTwo,ratingCount,remark}) => {
    return(
        <div>
            <h1> {name}</h1>
            <p> ⭐{avgRating}{ratingCount} {costForTwo}</p>
            <p>{cuisines}</p>
            <p> {deliveryTime}</p>
            <p> 🚴 {distance}  {remark}</p>
        </div>
    )
}

export default Resinfo;