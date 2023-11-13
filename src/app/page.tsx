"use client";
import ProductCard from "@components/ProductCard/ProductCard";
import styles from "@/app/homepage.module.css";
import { ProductCartDetail, ProductResponse } from "@entities/product";
import { useGetProducts } from "@utils/products";
import { useState } from "react";
import CartItem from "@components/CartItem/CartItem";

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

  const getStock = (id: string, product: ProductResponse) => {
    return product.stock - (cartItems[id] || 0);
  };

  console.log({ productsById });

  return (
    <div className="flex w-full">
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
      <div style={{ width: "400px" }}>
        {Object.entries(cartItems).map(([id, count]) => (
          <CartItem
            key={id}
            {...productsById[id]}
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
            count={count}
          />
        ))}
      </div>
    </div>
  );
}
