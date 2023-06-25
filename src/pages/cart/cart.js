import "./style.css";
import { getProductById } from "../../api/getProductsById";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  getProductQuantityFromLocalStorage,
  isProductAlreadyInCart,
  calculateSubtotal,
} from "../../utils/cart";

const showProducts = async () => {
  const cart = localStorage.getItem("cart");

  const products = JSON.parse(cart);
  const table = document.createElement("table");
  table.id = "cart-table";
  table.innerHTML = `
    <tr>
      <th style="width: 300px">Product</th>
      <th style="width: 100px">Image</th>
      <th style="width: 200px">Price</th>
      <th style="width: 200px">Quantity</th>
      <th style="width: 200px">Subtotal</th>
    </tr>
  `;
  let total = 0;
  products.forEach((product) => {
    getProductById(product.id).then((productInfo) => {
      const row = document.createElement("tr");
      row.id = "p" + product.id;
      row.innerHTML = `
        <td>${productInfo.product}</td>
        <td><img src="${productInfo.image}" width="50px" /></td>
        <td>${productInfo.price} RON</td>
        <td>
          <button id="${product.id}" class="decrement-quantity">-</button>
          <span class="quantity">${product.quantity}</span>
          <button id="${product.id}" class="increment-quantity">+</button>
        </td>
        <td> <span id="subtotal-${product.id}" class="subtotal">${
        productInfo.price * product.quantity
      } RON </span></td>
      `;

      table.appendChild(row);
      total += productInfo.price * product.quantity;
      document.getElementById("cart").innerHTML = "";
      document.getElementById("cart").appendChild(table);
      const totalElement = document.getElementById("totalPrice");
      totalElement.innerHTML = `Total: ${total} RON`;
    });
  });
};
window.addEventListener("load", showProducts);

document.getElementById("cart").addEventListener("click", async (e) => {
  const cartArray = JSON.parse(localStorage.getItem("cart"));
  const productId = e.target.id;

  if (e.target.classList.contains("decrement-quantity")) {
    decrementProductQuantity(productId, cartArray);
  } else if (e.target.classList.contains("increment-quantity")) {
    incrementProductQuantity(productId, cartArray);
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));

  if (!isProductAlreadyInCart(productId, cartArray)) {
    document
      .getElementById("cart")
      .querySelector("#p" + productId)
      .remove();
  } else {
    document
      .getElementById("cart")
      .querySelector("#p" + productId)
      .querySelector(".quantity").innerHTML =
      getProductQuantityFromLocalStorage(productId, cartArray);
  }
  const subtotalElement = document.getElementById("subtotal-" + productId);
  const newSubtotal = await calculateSubtotal(productId, cartArray);
  subtotalElement.innerHTML = `${newSubtotal} RON`;
});
