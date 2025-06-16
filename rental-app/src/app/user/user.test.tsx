import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersPage from "./page";

describe("Users page", () => {
  it("returns correct heading", async () => {
    render(<UsersPage />);
    const heading = await screen.queryByText("Manage Users");
    expect(heading).toBeInTheDocument();
  });

  it("gets ul", async () => {
    render(<UsersPage />);
    const testId = await screen.getByTestId("ul");
    expect(testId).toBeInTheDocument();
  });
});
