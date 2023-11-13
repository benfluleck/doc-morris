import { ProductResponse } from "@entities/product";
import { useEffect, useState } from "react";

const getAllAvailableProducts = async (): Promise<Record<ProductResponse["code"], ProductResponse>> => {
  const productsReq = await fetch("http://localhost:3000/api/products");

  const products = (await productsReq.json()) as ProductResponse[];

  const availableProductsById = await products.filter(
    (product: ProductResponse) => product.available
  ).reduce((acc, current) => {
    acc[current.code] = current;
    return acc;
  }, {} as Record<ProductResponse["code"], ProductResponse>);

  return availableProductsById;
};

export const useGetProducts = () => {
  const [productsById, setProductsById] = useState<Record<ProductResponse["code"], ProductResponse>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllAvailableProducts();

      setProductsById(response);
    };

    fetchData();
  }, []);

  return {
    productsById,
    products: Object.values(productsById)
  };
};
