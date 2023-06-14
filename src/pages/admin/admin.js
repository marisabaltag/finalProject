import "./style.css";
import { getProducts } from "../../api/getProducts";
import { createProductRow } from "../../compoments/productRow";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  document.getElementById("prodcutsList").innerHTML = products
    .map((product) => createProductRow(product))
    .join("");
});
