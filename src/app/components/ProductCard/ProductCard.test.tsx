import { render, screen } from "@testing-library/react";
import ProductCard from "@components/ProductCard/ProductCard";
import { ProductCardProps } from "@/app/entities/product";
import { product } from "@mocks/products";

const defaultProps: ProductCardProps = {
  ...product,
};

describe("ProductCard component", () => {
  it("renders ProductCard component", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByTestId("product-card-component")).toBeInTheDocument();
  });

  it("renders ProductCard attributes", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("20kg • 40 x 3")).toBeInTheDocument();
    expect(screen.getByText("Test Name")).toBeInTheDocument();
  });

  it("renders a cart buttom", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getAllByTestId("cart-button")).toHaveLength(1);
  });
});
