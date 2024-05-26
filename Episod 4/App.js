import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  console.log(props)  
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

const cards = [
  {
    id: '123',
    img: "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2",
    resName: "Meghna Food",
    resDish: ["Chicken", "Biryani", "Bhat", "daal", "roti"],
    rating: 3.5,
    time: 34
  },
  {
    id: '1234',
    img: "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2",
    resName: "Kappa Food",
    resDish: ["Chicken", "Biryani", "Bhat", "daal", "roti"],
    rating: 1.5,
    time: 42
  },
  {
    id: '1235',
    img: "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2",
    resName: "KFC",
    resDish: ["Chicken", "Biryani", "Bhat", "daal", "roti"],
    rating: 5.5,
    time: 94
  },
  {
    id: '1236',
    img: "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2",
    resName: "sdfasdf",
    resDish: ["Chicken", "Biryani", "Bhat", "daal", "roti"],
    rating: 3.5,
    time: 34
  },
  {
    id: '1237',
    img: "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2",
    resName: "sdfakdj",
    resDish: ["Chicken", "Biryani", "Bhat", "daal", "roti"],
    rating: 3.5,
    time: 34
  },
  {
    id: '1238',
    img: "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2",
    resName: "sdfakdj",
    resDish: ["Chicken", "Biryani", "Bhat", "daal", "roti"],
    rating: 3.5,
    time: 34
  }
]

const Body = () => {
  return (
    <div className="body">
      {
        cards.map(card => (
          <ResCard key={card.id} resData = {card} />)
        )
      }
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
