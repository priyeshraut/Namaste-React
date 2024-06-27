import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

   const loginBtn = screen.getByRole('button', { name: "Login" });

   const loginBtnText = screen.getByText("Login");

  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

   const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginBtn = screen.getByRole('button', { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole('button', { name: "Logout" });
  
    expect(logoutBtn).toBeInTheDocument();
  });
