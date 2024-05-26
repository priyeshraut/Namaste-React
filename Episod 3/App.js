// first read README.md


import React from "react";
import ReactDOM from "react-dom/client";



const elem = <span>React Elem</span>

// you can commpose react element inside react element 
const title = ( 
  <h1 className="color">
    {elem}
    Namaste React using jsx
  </h1>
);

const Title = () => ( 
  <h1 className="color">
    Namaste React using jsx
  </h1>
);

const number = 10000;

// React componenet
// everytig in react is componenet
// there are two types of component, tow ways of creating react component - 1. class based components - old and 2. functional components - new

// React Functional Component - it is just a normal js function
// whenver you creating functional component name it with a capital letter it's a react way to understand that this is a react component

// it return some jsx element

// if a function returing a react element it becomes a functional component. If a function returns some piece of jsx which is converted into reactElemnt then it is a functinal commponent.


const HeadingComponenet = () => (
  <div id="container">

    {/* you can use any js code, js expressin inside curly braces */}

    {number}

    <h2>{100 + 200}</h2>
    
    {title}

    {/* <Title /> and <Title></Title>  both things are same */}
    <Title /> 
    <Title></Title> 

    {/* Title is a functin so we can call this usng - {} */}
    {Title()}
    <h1>Namaste React Functinal componenet</h1>
  </div>
)


/*
this is called component composition component inside a component
const HeadingComponenet = () => (
  <div id="container">
    <Title /> 
    <h1>Namaste React Functinal componenet</h1>
  </div>
)
*/

console.log(HeadingComponenet)

const root = ReactDOM.createRoot(document.getElementById('root'));

// when babel sees an angular brackets and sees a HeadingComponent in it so it understand there must be some HeadingComponent existing there. 

root.render(<HeadingComponenet />);



// you can use react component in react element never do that it's not a good way 

/*
const HeadingComponenet = () => (
  <div id="container">
    <h1>Namaste React Functinal componenet</h1>
  </div>
)


const title = ( 
  <h1 className="color">
    Namaste React using jsx
    <HeadingComponenet />
  </h1>


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(title);
);
*/


// if you have a api and may be api has some issue in it like api passes some malesius data or some one attacking on your system using api or any code so jsx will handle all things it will escape it it will sanitize that data
// whever any code wrap inside curly braces - {} the browser/jsx won't blindly run it it wil sanitize that code whatever is coming and then pass in. it prevents cross-site scripting attack for you

/*
const data = api.getData();
const HeadingComponenet = () => (
  <div id="container">
  {data}
    <h1>Namaste React Functinal componenet</h1>
  </div>
)
*/


// Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

// For example, class becomes className in JSX, and tabindex becomes tabIndex.