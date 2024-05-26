//one

// Never ever create any hard-coded data into your app. Keep these in separate file like mockData.js

// hard-coded data
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

  

  //two

  const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
            {/* Never ever create any hard-coded string into your component file */}
            {/* src="" => this is hard-coded data */}
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

  export default Header;




Tow types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";




  There are two types of export and import
  one is the default export and the second is the named export or named import

  by default the file can only export one thing
  if you have to export multiple things then you have to use named export
  
  like:- 
  export const CON_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2";

export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2";

this is the way to import named export
import { LOGO_URL } from "./utils/constant";


don't use named export/imort either you have to export/import multiple things keep it simple use default

# React Hooks
(Normal JS utility function)
There are two very imp hooks known as
-useState() - Superpowerful State Varialble in React
-useEffect()


whever you call usestate like that (useState()) it will give you a state variable and how do you reveive that state variable like this const [] = useState() inside an array



const [card] = useState(); - {state variable}
this is same like: - 
let card; - {normal variable}


how do you pass default value to card:-
const [card] = useState([]);
this is same like: - 
let card = [];






<!--  Three -->

import ResCard from "./Resturant";
import { useState } from "react";

const Body = () => {
// local state variable
const [cards, setCards] = useState([
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
}])

// now if I want to modify cards so you can not do this: 
// cards = [] you can't
// you have to modify it by a funtion and the funtion come as the second parameter in this array const [cards] =..... and this is known as setCards
// so, the setCards is used to update this cards

<!-- if we have a normal variable like this :- let cards; so if I will update it my ui does not update but 
if we have a superpowerful react variable it will keep the ui in sync with that vairable so when I click on Top rated button ui will update.
 -->
 <!-- as soon as I change my state variable react will automatically referesh our componenet and this is known as  Render -->

 <!-- formal defination
 Whenver a state variable update/changes React will re-render the components -->

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterCards = cards.filter(card => card.rating > 4);
          setCards(filterCards)
        }}>Top Rated Res</button>
      </div>
      {cards.map((card) => (
        <ResCard key={card.id} resData={card} />
      ))}
    </div>
  );
};

export default Body;
