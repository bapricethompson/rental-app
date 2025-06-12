import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQ from "./page";

describe("FAQ page", () => {
  it("renders the header", () => {
    render(<FAQ />);
    const heading = screen.getByRole("heading", {
      name: /frequently asked questions/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FAQ />);

    const questions = [
      "How does gear rental work?",
      "Who can rent gear?",
      "What kinds of gear are available?",
      "Is the gear available in my area?",
      "How much does it cost?",
      "What happens if the gear is damaged or lost?",
      "Can I list my own gear?",
      "Do you offer guided experiences?",
    ];

    questions.forEach((question) => {
      const questionElement = screen.getByText(question);
      expect(questionElement).toBeInTheDocument();
    });
  });
});
