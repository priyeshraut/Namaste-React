const ResCard = (props) => {
    const {resData} = props;
  
    const {img, resName, resDish, rating, time} = resData;
    return (
      <div className="card">
        <div className="resIMg">
          <img
            src={img}
            alt=""
          />
        </div>
        <h1>{resName}</h1>
        <h2>{resDish.join(", ")}</h2>
        <h3>{rating}</h3>
        <h3>{time}</h3>
      </div>
    );
  };

  export default ResCard;