import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { ProductResponse } from "@/app/entities/product";

const getAllProducts = async (): Promise<ProductResponse[]> => {
  const products = await fs.readFile(
    process.cwd() + "/src/app/mocks/products.json",
    "utf-8"
  );

  const currentProducts = (await JSON.parse(products)) as ProductResponse[];

  return currentProducts;
};

export async function GET() {
  return NextResponse.json(await getAllProducts());
}
