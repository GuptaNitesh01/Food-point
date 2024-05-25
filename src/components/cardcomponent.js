import Restaurantcard from "./restaurentcard";

const Cardcontainer = () => {
  const restaurantdata = [
    {
      imgUrl : "https://tse2.mm.bing.net/th?id=OIP.dHqpahhit7fjvYZZuWwVyQHaE7&pid=Api&P=0&h=180",
      title : "Prep Fitness kitchen",
      starrating : "4.5",
      deliveryTime : "40-50",
      cuisines : "Healthy and Fresh Food",
      location : "Bandra West",
    },
    {
      imgUrl :"https://tse4.mm.bing.net/th?id=OIP.uqYdpk_sNpTveBnnzn5AjwHaEY&pid=Api&P=0&h=180",
      title : "Radha Krishna",
      starrating : "4.9",
      deliveryTime : "30-35",
      cuisines : "South Indian, Asian, Tibetan, Chinese",
      location : "Ghatkopar West",
    },
    {
      imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qrK7sIJh2VaanAlPe1eB89Z68bK9ZUMleA&usqp=CAU",
      title : "american dhaba",
      starrating :"5",
      deliveryTime : "30-35",
      cuisines : "America, western, Indian",
      location: "tank road"
    },
    {
      imgUrl :"https://i.ytimg.com/vi/6E0QFJ3g1Yw/maxresdefault.jpg",
      title : "Aapla Dhaba",
      starrating : "4.9",
      deliveryTime : "30-35",
      cuisines : "South Indian, Asian, Tibetan, Chinese",
      location : "Ghatkopar West",
    },
    {
      imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qrK7sIJh2VaanAlPe1eB89Z68bK9ZUMleA&usqp=CAU",
      title : "american dhaba",
      starrating :"5",
      deliveryTime : "30-35",
      cuisines : "America, western, Indian",
      location: "tank road",
      },
      {
        imgUrl : "https://tse4.mm.bing.net/th?id=OIP.isKvZO4fnOOR-Hi3CbdEKQHaHa&pid=Api&P=0&h=180",
        title : "Kubec BistrocBar",
        starrating : "4.5",
        deliveryTime : "40-45",
        cuisines : "Chinese, Asian, Tibetan, Desserts",
        location : "Powai",
      },
    


  ];
    return(
      <div className="container d-flex flex-wrap gap-5"> 
      {
        restaurantdata.map((restaurant) => {
          return(
            <Restaurantcard
            {...restaurant}
              // imgurl={restaurant.imgUrl}
              // title={restaurant.title}
              // starrating={restaurant.starrating}
              // deliverytime={restaurant.deliveryTime}
              // cuisines={restaurant.cuisines}
              // location={restaurant.location}
              />

          );
        })
      }
      </div>
    );
  };

  export default Cardcontainer;