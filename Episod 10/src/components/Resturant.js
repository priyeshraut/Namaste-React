const ResCard = (props) => {
    const {resData} = props;
  
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData;
    return (
      <div className="w-[200px] border border-solid border-black rounde bg-gray-200 hover:bg-gray-400">
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
        </div>
      </div>
    );
  };

  export default ResCard;