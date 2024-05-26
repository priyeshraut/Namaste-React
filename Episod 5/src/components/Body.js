import ResCard from "./Resturant";
import cards from "./utils/mockData";
import { useState } from "react";

const Body = () => {
const [cardsData, setCardsData] = useState(cards)


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterCards = cardsData.filter(card => card.rating > 4);
          setCardsData(filterCards)
        }}>Top Rated Res</button>
      </div>
      {cardsData.map((card) => (
        <ResCard key={card.id} resData={card} />
      ))}
    </div>
  );
};

export default Body;
