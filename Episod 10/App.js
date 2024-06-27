import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ResturantMenuPage from "./src/components/ResturantMenuPage";




const Grocerry = lazy(() => import("./src/components/Grocerry"));



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
