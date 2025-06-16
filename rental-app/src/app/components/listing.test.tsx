// import { render, screen, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Listing from "./page";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve([{ id: 1, name: "Tent" }]),
//   })
// );

// describe("ListingPage", () => {
//   it("renders heading, search bar, add button, and listings", async () => {
//     render(<Listing />);

//     expect(
//       await screen.findByRole("heading", { name: /find your gear/i })
//     ).toBeInTheDocument();

//     expect(
//       await screen.findByRole("textbox", { name: /search/i })
//     ).toBeInTheDocument();

//     expect(
//       await screen.findByRole("button", { name: /add item/i })
//     ).toBeInTheDocument();

//     await waitFor(() => {
//       expect(screen.getByText("Tent")).toBeInTheDocument();
//     });
//   });
// });

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
