import ResCard from "./Resturant";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import useCard from "./utils/useCard";

const Body = () => {
  const { cardsData, filterCardsData, setCardsData, setFilterCardsData } = useCard();
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();



  if (!onlineStatus) return (<h1 style={{textAlign:"center"}}>Your are offline! Please check your internet connection</h1>);

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

          const filterResturant = cardsData.filter((card) => card.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

          setFilterCardsData(filterResturant);
        }}
      >
        Search
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          const filterCards = cardsData.filter((card) => card.avgRating > 4.1);
          setCardsData(filterCards);
        }}
      >
        Top Rated Res
      </button>
      <div className="body">
        {filterCardsData.map((cardVal) => (
          <Link key={cardVal.id} to={"/resturant/" + cardVal.id}>
            <ResCard resData={cardVal} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
