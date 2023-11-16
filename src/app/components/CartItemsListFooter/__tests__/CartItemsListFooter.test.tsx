import { render, screen } from "@testing-library/react";
import { cartItems } from "@mocks/cartItem";
import { products } from "@mocks/products";
import CartItemListFooter from "@components/CartItemsListFooter/CartItemsListFooter";

const defaultProps = {
  cartItems,
  productsById: products,
  onUpdateCart: () => {},
  onRemoveItem: (foo: string) => foo,
  isFooter: true,
};

describe("CartItemList component", () => {
  it("renders ListList component", () => {
    render(<CartItemListFooter {...defaultProps} />);

    expect(screen.getByTestId("cart-items-list-footer")).toBeInTheDocument();
  });

  it("render a count of 3 Products", () => {
    render(<CartItemListFooter {...defaultProps} />);

    expect(screen.getByText("3 Produkte")).toBeInTheDocument();
  });

  it("render button with text Zur Ubersicht", () => {
    render(<CartItemListFooter {...defaultProps} />);

    expect(screen.getByText("Zur Ubersicht")).toBeInTheDocument();
  });

  it("render Number of products when the isOpen: true", () => {
    render(<CartItemListFooter {...defaultProps} isOpen={true} />);

    expect(screen.getByText("Summe (3 Produkte)")).toBeInTheDocument();
  });

  it("render Total with de localization isOpen: true", () => {
    render(<CartItemListFooter {...defaultProps} isOpen={true} />);

    expect(screen.getByText("Total 42,94 €")).toBeInTheDocument();
  });

  it("render a className of wrapper when isFooter: true", () => {
    render(<CartItemListFooter {...defaultProps} />);

    expect(screen.getByTestId("cart-items-list-footer")).toHaveClass("wrapper");
  });

  it("render a className of noWrapper when isFooter: false", () => {
    render(<CartItemListFooter {...defaultProps} isFooter={false} />);

    expect(screen.getByTestId("cart-items-list-footer")).toHaveClass(
      "noWrapper"
    );
  });
});
