import { productsURL } from "../pages/constants";
const productData = {
  product: document.getElementById("productName").value,
  image: document.getElementById("productImg").value,
  price: document.getElementById("productPrice").value,
  brand: document.getElementById("productBrand").value,
  category: document.getElementById("productCateg").value,
  description: document.getElementById("productDescription").value,
  oflactoryNotes: document.getElementById("productNotes").value,
  quantityInStock: document.getElementById("productStock").value,
};
export const addNewProductToAPI = async (productData) => {
  const response = await fetch(productsURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const product = await response.json();
  return product;
};
