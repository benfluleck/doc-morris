"use client";
import { useState } from "react";
import dynamic from 'next/dynamic'
import ProductCard from "@components/ProductCard/ProductCard";
import { ProductCartDetail, ProductResponse } from "@entities/product";
import { useGetProducts } from "@utils/products";
import CartItemList from "@components/CartItemList/CartItemList";
import CartItemListFooter from "@components/CartItemsListFooter/CartItemsListFooter";

import styles from "@/app/homepage.module.css";


const BottomSheet = dynamic(() => import('@components/BottomSheet/BottomSheet'));


export default function Home() {
  const { products, productsById } = useGetProducts();

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

  const getStock = (id: string, product: ProductResponse) => {
    return product.stock - (cartItems[id] || 0);
  };

  return (
    <>
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
        <div
          className={`p-6 flex-1 max-[650px]:p-0 max-[650px]:divide-y max-[650px]:divide-slate-200 ${
            isOpen ? `${styles.hidden}` : `${styles.container}`
          }`}
        >
          {products.map((product, index) => {
            const imageUrl =
              product.images[0].variants["140"].formats.webp.resolutions["2x"]
                .url;

            return (
              <ProductCard
                key={product.code}
                id={product.code}
                imageSrc={imageUrl}
                imageWidth={product.images[0].variants["140"].width}
                imageHeight={product.images[0].variants["140"].height}
                name={product.name}
                supplier={product.supplier}
                dosageForm={product.dosageForm}
                stock={getStock(product.code, product)}
                packagingSize={product.packagingSize}
                basePrice={product.baseprice}
                price={product.prices.salesPrice.formattedValue}
                discount={product.prices.savings.formattedValue}
                onClick={handleClick}
                priority={index <= 4}
              />
            );
          })}
        </div>
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
    </>
  );
}
