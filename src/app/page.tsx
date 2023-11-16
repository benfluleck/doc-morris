import HomePage from "@components/HomePage/HomePage";
import { ProductResponse } from "./entities/product";


const BASE_URL = 'http://localhost:3000'

async function getData() {
  const res = await fetch(`${BASE_URL}/api/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();

  const availableProductsById = response
    .filter((product: ProductResponse) => product.available)
    .reduce((acc: { [x: string]: any }, current: { code: string | number }) => {
      acc[current.code] = current;
      return acc;
    }, {} as Record<ProductResponse["code"], ProductResponse>);

  return availableProductsById;
}

export default async function Home() {
  const data = await getData();

  return <HomePage productsById={data} products={Object.values(data)} />;
}
