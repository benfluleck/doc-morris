import { cartItems } from "@mocks/cartItem";
import { products } from "@mocks/products"
import { getStock, getTotal } from "../total";

describe("getTotal function", () => {
  it("should calculate total to equal 42,94", () => {


    expect(getTotal(cartItems, products)).toEqual("42,94")
  });
});

describe("getStock function", () => {
  it("should calculate total to equal 34", () => {


    expect(getStock('12700079', Object.values(products)[0], cartItems)).toEqual(34)
  });
});
