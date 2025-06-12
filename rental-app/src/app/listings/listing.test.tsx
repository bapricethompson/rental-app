import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Listing from "./page";

jest.mock("../components/Listing", () => {
  const ListingMock = () => <div data-testid="listing">Listing Component</div>;
  ListingMock.displayName = "ListingMock";
  return ListingMock;
});

jest.mock("../components/SearchBar", () => {
  const SearchBarMock = () => <input aria-label="Search Gear" />;
  SearchBarMock.displayName = "SearchBarMock";
  return SearchBarMock;
});

jest.mock("../components/AddListingButton", () => {
  const AddListingButtonMock = ({ children }) => <button>{children}</button>;
  AddListingButtonMock.displayName = "AddListingButtonMock";
  return AddListingButtonMock;
});

describe("ListingPage", () => {
  it("renders heading, search bar, add button, and listing", async () => {
    await act(async () => {
      render(<Listing />);
    });

    expect(
      await screen.findByRole("heading", { name: /find your gear/i })
    ).toBeInTheDocument();
    expect(await screen.findByLabelText("Search Gear")).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /add item/i })
    ).toBeInTheDocument();
    expect(await screen.findByTestId("listing")).toBeInTheDocument();
  });
});
