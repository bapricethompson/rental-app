import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListingClient from "./Listing";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

describe("ListingClient", () => {
  it("renders listings correctly", () => {
    const fakeListings = [
      {
        id: 1,
        title: "Mountain Bike",
        price_per_day: 25,
        description: "Rugged and reliable mountain bike.",
      },
      {
        id: 2,
        title: "Portable Solar Charger",
        price_per_day: 10,
        description: "Stay powered on the go.",
      },
    ];
    render(<ListingClient listings={fakeListings} />);

    expect(screen.getByText("Mountain Bike")).toBeInTheDocument();
    expect(screen.getByText("Portable Solar Charger")).toBeInTheDocument();
  });
});
