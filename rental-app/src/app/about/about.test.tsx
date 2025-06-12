import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./page";
//import userEvent from "@testing-library/user-event";
describe("test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("is a header", () => {
    render(<About />);
    const headerElement = screen.getByRole("heading", {
      name: /exist/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
});
