import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();
  
    const handleClick = (item) => {
      // Dispatch an action
      dispatch(addItem(item));
    };
  
    return (
      <div>
        {items.map((item, index) => (
          <div className="flex justify-center gap-4 items-center m-4" key={index}>
            <div className="flex flex-row-reverse justify-between gap-4 border border-black w-full p-4"> 
              <img className="w-[200px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} alt="" />
              <div className="text-left">
              <h1 className="font-bold">{item.card.info.name} - Rs.{item.card.info.price}</h1>
              <p>
                {item.card.info.description}
              </p>
              </div>
            <div
              onClick={() => handleClick(item)}
              className="font-bold bg-black text-white p-1 rounded mx-4 cursor-pointer absolute"
            >
              Add Item +
            </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  