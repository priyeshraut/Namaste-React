import ResCard, { withOpenLabel } from "./Resturant";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filterCardsData, setFilterCardsData] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292"
    );

    const json = await data.json();

    setCardsData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (resData) => resData.info
      )
    );

    setFilterCardsData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (resData) => resData.info
      )
    );
  };

  const onlineStatus = useOnlineStatus();

  // using higher order component to show open label on rescard
  const ResCardOpen = withOpenLabel(ResCard);

  if (!onlineStatus)
    return (
      <h1 style={{ textAlign: "center" }}>
        Your are offline! Please check your internet connection
      </h1>
    );

    const { loggedInUser, setUserName } = useContext(UserContext);

  return cardsData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex gap-6">
        <input
          className="border border-solid border-black m-1 p-1"
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="border bg-green-700 text-white p-2 rounded"
          type="submit"
          onClick={() => {
            const filterResturant = cardsData.filter((card) =>
              card.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            );

            setFilterCardsData(filterResturant);
          }}
        >
          Search
        </button>
        <button
          className="border bg-green-700 text-white p-2 rounded"
          onClick={() => {
            const filterCards = cardsData.filter(
              (card) => card.avgRating > 4.1
            );
            setCardsData(filterCards);
          }}
        >
          Top Rated Res
        </button>
        <div>
          <label>User Name:</label>
        <input className="border border-black m-1 p-1" type="text" onChange={(e) => setUserName(e.target.value) } value={loggedInUser} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {filterCardsData.map((cardVal) => (
          <Link key={cardVal.id} to={"/resturant/" + cardVal.id}>
            {/* if the ResCard is isopen then add  a open label to it */}
            {cardVal.isOpen ? (
              <ResCardOpen resData={cardVal} />
            ) : (
              <ResCard resData={cardVal} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
