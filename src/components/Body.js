import { useEffect, useState } from "react";
//import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function fitlterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call here...
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaning
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("rendering...");

  //Conditional rendering...
  // if my restaurant is empty => render shimmer UI
  //if my restaurant has data => actual data UI

  //not rendered component
  if(!allRestaurants) return null;

  if(filteredRestaurants?.length === 0) return <h1>No Restaurant match your Filtered data...</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = fitlterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Serach
        </button>
      </div>
      <div className="restaurent-card">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
