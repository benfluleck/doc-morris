"use client";
import ProductCard from "@components/ProductCard/ProductCard";
import styles from "@/app/homepage.module.css";
import { ProductCartDetail, ProductResponse } from "@entities/product";
import { useGetProducts } from "@utils/products";
import { useState } from "react";
import CartItemList from "./components/CartItemList/CartItemList";

export default function Home() {
  const { products, productsById } = useGetProducts();

  const [cartItems, setCartItems] = useState<
    Record<ProductCartDetail["id"], number>
  >({});

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
      <div className="flex w-full px-8">
        <div className={`${styles.container} p-6 flex-1`}>
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
      <div className="flex items-center justify-around h-24 bg-white w-full fixed border-solid border-t bottom-0 border-slate-300">
        <p className="text-sm">4 Produkte</p>
        <button className="text-sm bg-button px-4 py-3 rounded-md text-white">Zur Ubersicht</button>
      </div>
    </>
  );
}
