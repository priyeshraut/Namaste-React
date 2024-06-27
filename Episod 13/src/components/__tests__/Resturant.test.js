import { render, screen } from "@testing-library/react"
import ResCard from "../Resturant"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Resturant(RestCard) component with prop Data", () => {
    render(<ResCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument;
})