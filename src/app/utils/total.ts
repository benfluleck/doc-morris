import { ProductCartDetail, ProductResponse } from "@entities/product";

export const getTotal = (
  cartItems: Record<ProductCartDetail["id"], number>,
  productsById: Record<ProductResponse["code"], ProductResponse>
): string => {
  let sum = 0;

  for (let element in cartItems) {
    sum += productsById[element].prices.salesPrice.value * cartItems[element];
  }
  return sum.toLocaleString("de-DE", { minimumFractionDigits: 2 });
};


export const getStock = (
  id: string,
  product: ProductResponse,
  cartItems: Record<ProductCartDetail["id"], number>
) => {
  return product.stock - (cartItems[id] || 0);
};
