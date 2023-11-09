import { Product } from "@/app/entities/product";
import { useEffect, useState } from "react";

const getAllAvailableProducts = async (): Promise<Product[]> => {
  const productsReq = await fetch("http://localhost:3000/api/products");

  const products = (await productsReq.json()) as Product[];

  const availableProducts = await products.filter(
    (product: Product) => product.available
  );

  return availableProducts;
};

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllAvailableProducts();

      setProducts(response);
    };

    fetchData();
  }, []);

  return {
    products,
  };
};
