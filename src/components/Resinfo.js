const Resinfo = ({name ,avgRating,cuisines,deliveryTime,distance,costForTwo,ratingCount,remark}) => {
    return(
        <div className="info_container p-3"> 
            <h1> {name}</h1>
            <p> ⭐{avgRating}{ratingCount} {costForTwo}</p>
            <p>{cuisines}</p>
            <p> {deliveryTime}</p>
            <p> 🚴  {remark.replace(/<\/?b>/g,"")}.</p>
        </div>
    )
}

export default Resinfo;