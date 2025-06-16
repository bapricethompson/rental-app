import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListingClient from "../components/Listing";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

const fakeListings = [
  {
    id: 1,
    title: "Mountain Bike",
    description: "Great bike",
    price_per_day: 25,
  },
];

test("renders listing titles", () => {
  render(<ListingClient listings={fakeListings} />);
  expect(screen.getByText("Mountain Bike")).toBeInTheDocument();
});
