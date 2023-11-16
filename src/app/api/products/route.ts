import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { ProductResponse } from "@/app/entities/product";

const getAllProducts = async (): Promise<Record<ProductResponse["code"], ProductResponse>> => {
  const products = await fs.readFile(
    process.cwd() + "/src/app/mocks/products.json",
    "utf-8"
  );

  const currentProducts = await JSON.parse(products) as ProductResponse[] ;

  const availableProductsById = currentProducts.filter(
    (product: ProductResponse) => product.available
  ).reduce((acc, current) => {
    acc[current.code] = current;
    return acc;
  }, {} as Record<ProductResponse["code"], ProductResponse>);

  return availableProductsById;
};

export async function GET() {
  return NextResponse.json(await getAllProducts());
}
