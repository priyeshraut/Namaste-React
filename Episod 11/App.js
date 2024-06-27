import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ResturantMenuPage from "./src/components/ResturantMenuPage";
import UserContext from "./src/components/utils/UserContext";

const Grocerry = lazy(() => import("./src/components/Grocerry"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName("Priyesh Raut");
  }, []);

  return (
    <div className="app">
      {/* loggedInUser Default value use hoga UserContext.Provider ke bahar me*/}

      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <UserContext.Provider value={{loggedInUser: "Elon Musk"}}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocerry />
          </Suspense>
        ),
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
