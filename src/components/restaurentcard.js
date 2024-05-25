const Restaurantcard = (props) => {
  // imgurl, title , starrating , deliverytime , cuisines , location
    return(
      <div className="custom-card">
      <div className="mb-2 ">
        <img 
        src={props.imgUrl}
        // src="https://tse2.mm.bing.net/th?id=OIP.dHqpahhit7fjvYZZuWwVyQHaE7&pid=Api&P=0&h=180" width="100%"
        /> 
        </div>
        <div className="px-2">
        <h2> {props.title} </h2>
        {/* <h2> Prep Fitness kitchen </h2> */}
        <div className="d-flex justify-content-between">
          <div>⭐{props.starrating}</div>
          {/* <div>⭐4.5</div> */}
          <div> {props.deliverytime} min </div>
          {/* <div> 40 - 50 min</div> */}
        </div>
        <div className="text-secondary"> {props.cuisines}</div>
        {/* <div className="text-secondary">Healthy and Fresh Food </div> */}
        <div>{props.location}</div>
        {/* <div>Bandra West</div> */}
        </div>
      </div>
    )
    }

    export default Restaurantcard;