const ResCard = (props) => {
    const {resData} = props;
  
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData;
    return (
      <div className="card">
        <div className="resIMg">
          <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            alt=""
          />
        </div>
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
      </div>
    );
  };

  export default ResCard;