import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { fitlterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaning
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // const isOnline = useOnline()

  // if(!isOnline) {
  //   return <h1>🔴 Offline Please check your internet connection!!</h1>
  // }

  //Conditional rendering...
  // if my restaurant is empty => render shimmer UI
  //if my restaurant has data => actual data UI

  //not rendered component
  if (!allRestaurants) return null;

  //if(filteredRestaurants?.length === 0) return <h1>No Restaurant match your Filtered data...</h1>
  
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
      <div className="restaurent-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {" "}
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};



export default Body;
