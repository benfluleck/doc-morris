"use client";

import { ProductCartDetail } from "@/app/entities/product";
import CartIcon from "@components/CartIcon/CartIcon";

export const CartButton = ({
  id,
  imageSrc,
  name,
  packagingSize,
  dosageForm,
  price,
  stock,
  setStock,
  onClick = () => {},
}: ProductCartDetail) => {
  return (
    <button
      aria-label="add-to-cart"
      disabled={stock <= 0}
      onClick={() => {
        onClick({
          id,
          imageSrc,
          name,
          packagingSize,
          dosageForm,
          price,
          stock,
          setStock,
        });
        setStock((prevValue: number) => prevValue - 1);
      }}
      className="bg-teal-950 px-2 py-3 flex items-center rounded-md justify-center self-end disabled:opacity-50 disabled"
    >
      <CartIcon />
    </button>
  );
};
