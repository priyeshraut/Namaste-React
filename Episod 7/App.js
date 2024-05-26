import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ResturantMenuPage from "./src/components/ResturantMenuPage";



// dont insect and use after too see the change in this applicaton beacause it thowes error without insect work well

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// createBrowserRouter takes a list of paths and what is the path path is noting but an object
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId", // this means that this part - (:resid) of the url is dynamic [/resturant/:resid this menas that resid is dynamic resid can be changed a/c to the id of the resturant so resid will be the id of the resturant]
        // how do we read "/resturant/:resid" in my component we use useParam hook which will give us what is there as a param
        element: <ResturantMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
