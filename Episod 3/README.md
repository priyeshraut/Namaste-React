<!-- Notes 1 -->


import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - Js Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "color"}, "Namaste React using React.createElement");

console.log(heading)

// JSX - html like or xml   like syntax


// js engine will not understnad this piece of code - (const jsxheading = <h1 className="color">Namaste React using jsx</h1>;) why because js engine understand ecma script or es6
// when you create jsx it transpiled (means js engine converted this code that browser can understand, react can understnad) before it reaches that js engine now transpiling is done by parcel and it gives the responsivility of trasnpilation to the package Babel
// Babel is again a package, javascript compiler, it takes jsx and covert or transpiled it into the code that browser, js engine, react can understand

// when you give jsx it transpiled or converted to React.createElement and React.createElement is then converted to js object and then it render onto dom as an html element

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

// if you given attributes to jsx you have to use camel case
const jsxheading = <h1 className="color">Namaste React using jsx</h1>;

// if you write in multiple line then you have wrap this inside round brackets it is mandetory we wrap it inside round brackets because babel needs to understand where jsx starting and where is jsx ending

const jsxheading2 =( <h1 className="color">
  Namaste React using jsx
  </h1>);


// you can also use round brackets in single line

// const jsxheading =( <h1 className="color">Namaste React using jsx</h1>);

console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxheading);







<!-- Notes 2 -->


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
    
    {/* you can use any js code, js expressin inside curly braces inside jsx*/}

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



