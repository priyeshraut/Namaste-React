import { useState, useEffect } from "react";
import { BODY_API } from "./constant";

const useCard = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filterCardsData, setFilterCardsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_API);

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

  return { cardsData, filterCardsData, setCardsData, setFilterCardsData };
};

export default useCard;
