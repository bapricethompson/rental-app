import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import GoButton from "./GoButton";

test("renders GoButton with correct href and fires onClick", async () => {
  const onClickMock = jest.fn();

  render(
    <GoButton href="/listings" onClick={onClickMock}>
      Browse Gear
    </GoButton>
  );

  // Check link href
  const link = screen.getByRole("link", { name: /browse gear/i });
  expect(link).toHaveAttribute("href", "/listings");

  // Click the inner div with role="button"
  const buttonDiv = screen.getByRole("button", { name: /browse gear/i });
  await userEvent.click(buttonDiv);

  expect(onClickMock).toHaveBeenCalled();
});
