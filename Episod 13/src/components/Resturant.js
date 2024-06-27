import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCard = (props) => {
    const {resData} = props;

    const {loggedInUser} = useContext(UserContext);
  
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData;
    return (
      <div data-testid="resCard" className="w-[200px] h-[400px] overflow-hidden border border-solid border-black rounde bg-gray-200 hover:bg-gray-400">
        <div className="resIMg">
          <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="p-2">
        <h1 className="font-bold">{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{loggedInUser}</h3>
        </div>
      </div>
    );
  };


  
  // Higher order component

  // input - ResCard ==> ResCard Open

  export const withOpenLabel = () => {
    return (props) => {
      return (
        <div>
          <label style={{position:"absolute", color: "#fff", background : "#000", padding: "10px"}}>Open</label>
          <ResCard {...props} />
        </div>
      )
    }
  }

  export default ResCard;