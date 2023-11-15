import { FC } from "react";
import { CartItemListProps } from "@/app/entities/product";
import { animated, useSpring } from "react-spring";
import CartItem from "@components/CartItem/CartItem";
import ArrowDownIcon from "@components/Icons/ArrowDown/ArrowDown";

const BottomSheet: FC<CartItemListProps> = ({
  cartItems,
  productsById,
  onUpdateCart,
  onRemoveItem,
  setIsOpen = () => {},
}) => {
  const style = useSpring({
    from: { bottom: "-100%" },
    to: { bottom: "0%" },
    config: {
      mass: 1,
      tension: 280,
      friction: 60,
    },
  });

  return (
    <animated.div style={style}>
      <div className="bg-white pb-28 pt-6 border-t-2 rounded">
        <div className="flex items-center mb-8 justify-around">
          <button aria-label="close-cart" onClick={() => setIsOpen(false)}>
            <ArrowDownIcon />
          </button>
          <h2 className="pl-6 text-slate-300 text-center">
            Zum Warenkorb hinzugefugt
          </h2>
          <p className="text-sm">{Object.keys(cartItems).length} Produkte</p>
        </div>
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
              stock={productsById[id].stock}
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
    </animated.div>
  );
};

export default BottomSheet;
