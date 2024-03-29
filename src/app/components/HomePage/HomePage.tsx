"use client";
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import { HomePageProps, ProductCartDetail } from "@entities/product";
import CartItemList from "@components/CartItemList/CartItemList";
import CartItemListFooter from "@components/CartItemsListFooter/CartItemsListFooter";
import ProductCardList from "@components/ProductCardList/ProductCardList";

const BottomSheet = dynamic(
  () => import("@components/BottomSheet/BottomSheet")
);

const HomePage: FC<HomePageProps> = ({ products, productsById }) => {
  const [cartItems, setCartItems] = useState<
    Record<ProductCartDetail["id"], number>
  >({});

  const [isOpen, setIsOpen] = useState(false);

  const onUpdateCart = (id: string, count: number) => {
    setCartItems((prevValues) => ({ ...prevValues, [id]: count }));
  };

  const handleClick = (id: string) => {
    if (id in cartItems) {
      setCartItems((prev) => ({ ...prev, [id]: cartItems[id] + 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    }
  };

  const onRemoveItem = (id: string) => {
    const currentItems = { ...cartItems };

    delete currentItems[id];

    setCartItems(currentItems);
  };


  return (
    <div>
      {isOpen && (
        <BottomSheet
          cartItems={cartItems}
          productsById={productsById}
          onUpdateCart={onUpdateCart}
          onRemoveItem={onRemoveItem}
          setIsOpen={setIsOpen}
        />
      )}
      <div className="flex w-full px-6">
        <ProductCardList
          products={products}
          cartItems={cartItems}
          handleClick={handleClick}
          isOpen={isOpen}
        />
        <CartItemList
          cartItems={cartItems}
          productsById={productsById}
          onUpdateCart={onUpdateCart}
          onRemoveItem={onRemoveItem}
        />
      </div>
      <CartItemListFooter
        cartItems={cartItems}
        productsById={productsById}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        isFooter={true}
      />
    </div>
  );
};

export default HomePage;
