import { render, screen } from "@testing-library/react";
import { cartItems } from "@mocks/cartItem";
import { products } from "@mocks/products";
import ProductCardList from "@components/ProductCardList/ProductCardList";

const defaultProps = {
  cartItems,
  products: Object.values(products),
  handleClick: () => {},
};

describe("ProductCardList component", () => {
  it("renders ProductCardList component", () => {
    render(<ProductCardList {...defaultProps} />);

    expect(screen.getByTestId("product-card-list-component")).toBeInTheDocument();
  });

  it("renders 4 ProductCard components", () => {
    render(<ProductCardList {...defaultProps} />);

    expect(screen.getAllByTestId("product-card-component")).toHaveLength(9);
  });

});
