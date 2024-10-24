import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("has correct styles", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toHaveStyle("height: 64px");

    expect(header).toHaveStyle(
      "background: linear-gradient(258deg, rgba(255, 117, 0, 1) 8%, rgba(232, 5, 55, 1) 53%)"
    );
  });
});
