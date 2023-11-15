import { ProductCartDetail, ProductResponse } from "@entities/product";
import { getTotal } from "@utils/total";
import styles from "./cartItemsListfooter.module.css";

const CartItemListFooter = ({
  isOpen,
  setIsOpen = () => {},
  isFooter,
  cartItems,
  productsById,
}: {
  isOpen?: boolean;
  cartItems: Record<ProductCartDetail["id"], number>;
  productsById: Record<ProductResponse["code"], ProductResponse>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isFooter?: boolean;
}) => {
  const numberOfItems = Object.keys(cartItems).length;

  return (
    <div
      className={`${isFooter ? `${styles.wrapper}` : `${styles.noWrapper}`} `}
    >
      {isOpen ? (
        <div
          className={`flex flex-col gap-2 p-6 border-t border-solid border-slate-300 ${styles.container}`}
        >
          <h3 className="font-semibold">Total</h3>
          <div className="flex justify-between gap-2 items-center">
            <p className="text-sm">Summe ({numberOfItems} Produkte)</p>
            <p>Total {getTotal(cartItems, productsById)} &#x20AC;</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-around h-24 bg-white w-full fixed border-solid border-t bottom-0 border-slate-300">
          <p className="text-sm">{numberOfItems} Produkte</p>
          <button
            aria-label="open-cart"
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm bg-button px-4 py-3 rounded-md text-white"
          >
            Zur Ubersicht
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItemListFooter;
