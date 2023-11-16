import { render, screen, fireEvent } from "@testing-library/react";
import { cartItems } from "@mocks/cartItem";
import { products } from "@mocks/products";
import { CartItemListProps } from "@/app/entities/product";
import BottomSheet from "../BottomSheet";

const defaultProps: CartItemListProps = {
  cartItems,
  productsById: products,
  onUpdateCart: () => {},
  onRemoveItem: () => {},
};

describe("CartItemList component", () => {
  it("renders ListList component", () => {
    render(<BottomSheet {...defaultProps} />);

    expect(screen.getByTestId("bottom-sheet")).toBeInTheDocument();
  });

  it("renders 3 CartItem components", () => {
    render(<BottomSheet {...defaultProps} />);

    expect(screen.getAllByTestId("cart-item-component")).toHaveLength(3);
  });

  it("renders 3 CartItem components", () => {
    render(<BottomSheet {...defaultProps} />);

    expect(screen.getAllByTestId("cart-item-component")).toHaveLength(3);
  });

  it("should call a function with a boolean", () => {

    const mockFn = jest.fn()

    render(<BottomSheet {...defaultProps} isOpen={true} setIsOpen={mockFn} />);

    const button = screen.getByTestId("arrow-button");

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(false)
  });

});
