import useResturantMenuPage from "./utils/useResturantMenuPage";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";


const ResturantMenuPage = () => {

  const { resId } = useParams();

  // creating custom hook
  const resInfo = useResturantMenuPage(resId);

  if (resInfo === null) return <Shimmer />;
  
  const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  
    
  return (
    <div style={{textAlign: "center"}}>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
      {/* Resturant Category */}
     {categories.map((category) => ( <ResturantCategory data={category?.card?.card} />))}
    </div>
);
};

export default ResturantMenuPage;
