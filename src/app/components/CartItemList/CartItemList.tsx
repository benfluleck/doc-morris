import { FC } from "react";
import CartItem from "@components/CartItem/CartItem";
import { CartItemListProps } from "@entities/product";
import { getTotal } from "@utils/total";

import styles from './cartItemList.module.css';


const CartItemList: FC<CartItemListProps> = ({
  cartItems,
  productsById,
  onUpdateCart,
  onRemoveItem,
}) => {
  return (
    <div className={`pt-6 shadow-md mt-11 h-fit w-fit ${styles.container}`}>
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
              onCartUpdate={onUpdateCart}
              onRemoveClick={onRemoveItem}
              count={count}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-2 p-6 border-t border-solid border-slate-300">
        <h3 className="font-semibold">Total</h3>
        <div className="flex justify-between">
          <p>Summe ({Object.keys(cartItems).length} Produkte)</p>
          <p>Total {getTotal(cartItems, productsById)} &#x20AC;</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
