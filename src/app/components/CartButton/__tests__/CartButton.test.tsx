import { render, screen, fireEvent } from "@testing-library/react";
import CartButton from "@components/CartButton/CartButton";


const defaultProps = {
  id: '444',
  stock: 5,
  onClick: () => {},
};

describe("CartButton component", () => { 
  it("renders CartButton", () => {
    render(<CartButton {...defaultProps} />);

    expect(screen.getByTestId("cart-button")).toBeInTheDocument();
  });

  it('renders plus icon', () => {
    render(<CartButton {...defaultProps} />);

    expect(screen.getByText("+")).toBeInTheDocument();
  })

  it('renders disabled attribute if stock <=0', () => {
    render(<CartButton {...defaultProps} stock={0} />);

    expect(screen.getByTestId("cart-button")).toBeDisabled()

  })

  it("should fire Event when input event is changed with parameters", () => {
    const mockOnClick = jest.fn();

    render(<CartButton {...defaultProps} onClick={mockOnClick} />);

    const button = screen.getByTestId("cart-button");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith("444")
  });

})
