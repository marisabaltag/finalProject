import "./style.css";
import { getProducts } from "../../api/getProducts";
import { createProductRow } from "../../compoments/productRow";
import { deleteProduct } from "../../api/deleteProduct";
import { addNewProductToAPI } from "../../api/addNewProduct";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  document.getElementById("productsList").innerHTML = products
    .map((product) => createProductRow(product))
    .join("");
});

let tableBody = document.querySelector("#productsList");
tableBody.addEventListener("click", onClickDeleteProduct);

async function onClickDeleteProduct(e) {
  if (e.target.classList.contains("removeProduct")) {
    // id format is p23, p34 we have to remove p and extract only the id value
    const id = e.target.parentNode.parentNode.id.substring(1);
    e.target.parentNode.parentNode.remove();
    await deleteProduct(id);
  }
}

const addNewProdcutBtn = document.querySelector("#addNewProduct");
const addNewProdcutForm = document.querySelector("#addNewProd");
const showContent = () => {
  addNewProdcutForm.style.display = "flex";
};
addNewProdcutBtn.addEventListener("click", showContent);
// addNewProdcutBtn.add;
const cancelBtn = document.querySelector("#cancelBtn");
const hideContent = () => {
  addNewProdcutForm.style.display = "none";
};
cancelBtn.addEventListener("click", hideContent);

const saveBtn = document.getElementById("saveProdBtn");
saveBtn.addEventListener("click", addNewProductToAPI);
