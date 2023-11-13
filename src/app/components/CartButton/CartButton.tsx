"use client";
import CartIcon from "@components/CartIcon/CartIcon";

const CartButton = ({
  id,
  stock,
  onClick = () => {},
}: {
  id: string;
  stock: number;
  onClick: (id: string) => void;
}) => {
  return (
    <button
      aria-label="add-to-cart"
      disabled={stock <= 0}
      onClick={() => {
        onClick(
          id
        );
      }}
      className="bg-teal-950 px-2 py-3 flex items-center rounded-md justify-center self-end disabled:opacity-50 disabled"
    >
      <CartIcon />
    </button>
  );
};

export default CartButton;
