import ResCard from "./Resturant";
import cards from "./utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
const [cardsData, setCardsData] = useState(cards)

useEffect(() => {
  console.log("useEffect Called")
}, []);


console.log("Body rendered")


/*
how the code executed:-
as soon as body component rendered it rendered line by line as soon as it sees useEffect it will just keep this callback function it will save this callback function to call it after render and it moves ahead then it logs body rendered and after that it render lower code (jsx) and then ones the render is done then it will call callback funtion inside useEffect and it just print this useEffect call
*/

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



<!-- using normal fetch -->
const apiUrl = "https://www.swiggy.com/mapi/homepage/getCards?lat=25.59080&lng=85.13480";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Do something with the JSON data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


  <!-- using promise -->
  const apiUrl = "https://www.swiggy.com/mapi/homepage/getCards?lat=25.59080&lng=85.13480";

function makeApiCall(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

makeApiCall(apiUrl)
  .then(data => {
    // Do something with the JSON data
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the API call:', error);
  });




<!-- zomato:- https://www.zomato.com/webroutes/search/home -->


using corsproxy.io can be helpfull if other use your app they don't know about cors so it prevents from error 
<!-- use like this:= -->
"https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=28.6105073&lng=77.114565"




