import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersPage from "./page";

describe("Users page", () => {
  it("returns correct heading", () => {
    render(<UsersPage />);
    const heading = screen.queryByText("Manage Users");
    expect(heading).toBeInTheDocument();
  });

  it("gets ul", () => {
    render(<UsersPage />);
    const testId = screen.getByTestId("ul");
    expect(testId).toBeInTheDocument();
  });
});
