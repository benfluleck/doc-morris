'use client'
import ProductCard from "@components/ProductCard/ProductCard";
import styles from "@/app/homepage.module.css";
import { ProductCartDetail } from "@/app/entities/product";
import { useGetProducts } from "@utils/products";

// const getAllAvailableProducts = async (): Promise<Product[]> => {
//   const productsReq = await fetch("http://localhost:3000/api/products");

//   const products = (await productsReq.json()) as Product[];

//   const availableProducts = await products.filter(
//     (product: Product) => product.available
//   );

//   return availableProducts;
// };

export default function Home() {

  const { products } = useGetProducts();
 


  const handleClick = (productCartItems: ProductCartDetail) => {
    console.log({ productCartItems })


  }

  return (
    <div className="flex w-full">
      <div className={`${styles.container} p-6 flex-1`}>
        {products.map((product,index) => {
          const imageUrl =
            product.images[0].variants["140"].formats.webp.resolutions["2x"]
              .url;


          return (
            <ProductCard
              key={product.code}
              id={product.code}
              imageSrc={imageUrl}
              imageWidth={product.images[0].variants['140'].width}
              imageHeight={product.images[0].variants['140'].height}
              name={product.name}
              supplier={product.supplier}
              dosageForm={product.dosageForm}
              stock={product.stock}
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
      <div style={{ width: "400px" }}></div>
    </div>
  );
}
