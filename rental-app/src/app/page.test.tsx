import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

jest.mock("next/link", () => {
  const MockLink = ({ href, children }) => (
    <a href={href} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

it("trigger on click when GoButton is pushed", async () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  render(<Home></Home>);

  const button = screen.getByRole("button", { name: /browse gear/i }); // or "button" if it's a button
  await userEvent.click(button);

  expect(consoleSpy).toHaveBeenCalledWith("hi");

  consoleSpy.mockRestore();
});
