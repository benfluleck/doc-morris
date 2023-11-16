import { render, screen } from "@testing-library/react";
import { CartItemListProps } from "@/app/entities/product";
import { cartItems } from "@mocks/cartItem";
import { products } from "@mocks/products";
import CartItemList from "@components/CartItemList/CartItemList";

const defaultProps: CartItemListProps = {
  cartItems,
  productsById: products,
  onUpdateCart: () => {},
  onRemoveItem: (foo: string) => foo,
};

describe("CartItemList component", () => {
  it("renders ListList component", () => {
    render(<CartItemList {...defaultProps} />);

    expect(screen.getByTestId("cartItemList-component")).toBeInTheDocument();
  });

  it("renders 4 CartItem components", () => {
    render(<CartItemList {...defaultProps} />);

    expect(screen.getAllByTestId("cart-item-component")).toHaveLength(3);
  });

  it("renders CartItemList attributes", () => {
    render(<CartItemList {...defaultProps} />);

    expect(screen.getByText("Zum Warenkorb hinzugefugt")).toBeInTheDocument();
  });

});
