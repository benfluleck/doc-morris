import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "@components/CartItem/CartItem";
import { ProductCartDetail } from "@/app/entities/product";

import { cartItem } from "@mocks/cartItem";

const defaultProps: ProductCartDetail = {
  ...cartItem
};

describe("CartItem component", () => {
  it("renders CartItem component", () => {
    render(<CartItem {...defaultProps} />);

    expect(screen.getByTestId("cart-item-component")).toBeInTheDocument();
  });

  it("renders CartItem attributes", () => {
    render(<CartItem {...defaultProps} />);

    expect(screen.getByText("Test Name")).toBeInTheDocument();
    expect(screen.getByText("6 euro")).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument;
    expect(screen.getByTestId("cart-input")).toHaveValue(1)
    expect(screen.getByTestId("cart-input")).toHaveAttribute('type', 'number')
  });

  it("should fire Event when input event is changed with parameters", () => {
    const mockOnClick = jest.fn();

    render(<CartItem {...defaultProps} onCartUpdate={mockOnClick} />);

    const input = screen.getByTestId("cart-input");

    fireEvent.change(input, { target: { value: 4 } });

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith("333", 4)
  });

  it("should render an error when the value is more than the stock", () => {
    const mockOnClick = jest.fn();

    render(<CartItem {...defaultProps} onCartUpdate={mockOnClick} />);

    const input = screen.getByTestId("cart-input");

    fireEvent.change(input, { target: { value: 56 } });

    expect(screen.getByText("You can't enter more than stock value")).toBeInTheDocument();
  });
});
