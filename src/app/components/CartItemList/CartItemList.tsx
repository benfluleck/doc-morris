import { FC } from "react";
import CartItem from "@components/CartItem/CartItem";
import CartItemListFooter from "@components/CartItemsListFooter/CartItemsListFooter";
import { CartItemListProps } from "@entities/product";

import styles from "./cartItemList.module.css";

const CartItemList: FC<CartItemListProps> = ({
  cartItems,
  productsById,
  onUpdateCart,
  onRemoveItem,
}) => {
  return (
    <div data-testid="cartItemList-component" className={`pt-6 shadow-md mt-11 h-fit w-fit ${styles.container}`}>
      <h2 className="pl-6 text-slate-300">Zum Warenkorb hinzugefugt</h2>
      <div className="p-6">
        {Object.entries(cartItems).map(([id, count]) => {
          return (
            <CartItem
              key={id}
              price={productsById[id].prices.salesPrice.formattedValue}
              imageSrc={
                productsById[id].images[0].variants["140"].formats.webp
                  .resolutions["2x"].url
              }
              name={productsById[id].name}
              dosageForm={productsById[id].dosageForm}
              packagingSize={productsById[id].packagingSize}
              id={productsById[id].code}
              stock={productsById[id].stock}
              onCartUpdate={onUpdateCart}
              onRemoveClick={onRemoveItem}
              count={count}
            />
          );
        })}
      </div>
      <CartItemListFooter
        cartItems={cartItems}
        productsById={productsById}
        isOpen={true}
      />
    </div>
  );
};

export default CartItemList;
