import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { Product } from "@/app/entities/product";

const getAllProducts = async (): Promise<Product[]> => {
  const products = await fs.readFile(
    process.cwd() + "/src/app/mocks/products.json",
    "utf-8"
  );

  const currentProducts = JSON.parse(products);

  return currentProducts;
};

export async function GET() {
  return NextResponse.json(await getAllProducts());
}
