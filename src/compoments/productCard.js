import "./style.css";

export const createProductCard = (product) => `
   <div class="card">
   <img src=${product.image} />
   <p id="pBrand"> ${product.brand}</p>
      <p id="pName">${product.product}</p>
      <p>${product.price} RON </p>
      <a href="src/pages/details/details.html?id=${product.id}">Details</a>
   </div>
`;
