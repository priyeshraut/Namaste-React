import ResCard from "./Resturant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filterCardsData, setFilterCardsData] = useState([]);
  const [searchText, setsearchText] = useState("");

  // whever you change a local state variable react re renders the componenets
  console.log("body render");

  // if you have to do something after rendering the component just write it inside useEffect this is the purpose of useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292");

    const json = await data.json();

    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((resData) => resData?.info));


    setCardsData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((resData) => resData?.info)
    );

    setFilterCardsData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((resData) => resData?.info)
    );
  };

  // conditional rendering - rendering on the basis of condition.
  /*
  if (cardsData.length === 0) {
    return <h1>Loading....</h1>
  }
   */

  return cardsData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          console.log(searchText);

          const filterResturant = cardsData.filter((card) => card.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

          setFilterCardsData(filterResturant);
        }}
      >
        Search
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          const filterCards = cardsData.filter((card) => card.avgRating > 4.5);
          setCardsData(filterCards);
        }}
      >
        Top Rated Res
      </button>

      <div className="body">
        {filterCardsData.map((cardVal) => (
          <ResCard key={cardVal.id} resData={cardVal} />
        ))}
      </div>
    </div>
  );
};

export default Body;
