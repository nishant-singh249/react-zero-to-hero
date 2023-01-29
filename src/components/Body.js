import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

function fitlterData(searchText, restaurants){
  return  restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText))
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  
  return (
    <>
      <div className="serch-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
           const data = fitlterData(searchText, restaurants)
           setRestaurants(data);
            
          }}
        >
          Serach
        </button>
      </div>
      <div className="restaurent-card">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
