import { ProductResponse } from "@entities/product";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [productsById, setProductsById] = useState<
    Record<ProductResponse["code"], ProductResponse>
  >({});

  useEffect(() => {
    const fetchData = async () => {
      const productsReq = await fetch("http://localhost:3000/api/products");

      const response = await productsReq.json();

      setProductsById(response);
    };

    fetchData();
  }, []);

  return {
    productsById,
    products: Object.values(productsById),
  };
};


