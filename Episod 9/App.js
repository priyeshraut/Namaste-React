import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ResturantMenuPage from "./src/components/ResturantMenuPage";

// how we can create a seperate bundle for Grocerry Component

// over here I will not import Grocerry directly but I will import it using lazy loading

// (import Grocerry from "./src/components/Grocerry";)


// chunking
// code spiliting
// on load demand
// dynamic bundling
// lazy loading
// dynamic import

// when do we call lazy loading because when our app will load intiallly our app home page will load  it will not load the code for grocerry. Only when I go to my grocerry page then only that grocerry code will be there in our app


// lazy loading

// lazy is a funtion which is given my react and it takes a callback function and callback function uses import function and this import function will take the path of Grocerry component

// here import is basically a funtion and this function will take the path of Grocerry component
const Grocerry = lazy(() => import("./src/components/Grocerry"));

// index....js in dist folder will not take Grocerry file it will not load when we click on grocerry we have got a grocerry.js file in dist folder not in index....js

// we splitted our components into two js bundles

// when we click on grocerry we got error why?

// Because grocerry code took 12 miliseconds to come to the browser so what happened react is very fast react tried to load the grocerry component but the code was not there so that is why react suspended the rendering

// so what happended was grocerry code was not there so react what it did it can not load so that is why it thew an error

// for better understandig 
// suppose we are on the home page now we just have index.js file as soon as I will click on grocerry it will take some time it will take few seconds to fetch the data of grocerry at that particular time that middle state react tries to render grocerry and it is not there that state that causes that error 

// how to handle that state we will use suspense to handle that state (error state)

// suspense is a component comes from react now wrap grocerry into suspense and give it a placeholder (fallback) that represents what should react render when the code was not available so basically kind of like a loading screen 

//  <Suspense fallback={<h1>Loading...</h1>}><Grocerry /></Suspense>


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocerry",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocerry /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId", 
        element: <ResturantMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
