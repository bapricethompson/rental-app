import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQ from "./page"; // Adjust if needed

describe("FAQ page", () => {
  it("reveals an answer after clicking the question", async () => {
    render(<FAQ />);

    const question = screen.getByText("How does gear rental work?");
    fireEvent.click(question);

    await waitFor(() => {
      expect(
        screen.getByText(/browse available listings near your destination/i)
      ).toBeInTheDocument();
    });
  });
});
