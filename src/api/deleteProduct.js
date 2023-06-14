import { productsURL } from "../pages/constants";
export const deleteProduct = async (id) => {
  const response = await fetch(`${productsURL}/${id}`, { method: "DELETE" });
  const product = await response.json();
  return product;
};
