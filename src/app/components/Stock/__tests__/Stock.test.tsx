import { render, screen } from "@testing-library/react";
import Stock from "@components/Stock/Stock";

const defaultProps = {
  stock: 3,
};

describe("Stock component", () => {
  it("renders Stock component", () => {
    render(<Stock {...defaultProps} />);

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("render Not in stock for stock less than or equal to 0", () => {
    render(<Stock stock={0} />);

    expect(screen.getByText("Not in Stock")).toBeInTheDocument();
  });
});
