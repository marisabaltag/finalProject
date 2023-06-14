import "./style.css";

export const createProductDetailsCard = (product) => `
   <div class="card-details">
      <div class="product-img">
        <img src=${product.image} /> 
      </div>
    <div class="product-details">
      <p id="pName">${product.product}</p>
      <p>Brand: ${product.brand}</p>
      <p> Categorie: ${product.category}</p>
      <p> Despre produs: ${product.description}</p>
      <p> Note olfactive: ${product.oflactoryNotes}</p>
      <p> Pret: ${product.price} RON </p>
       <a href="/src/pages/details/details.html?id=${product.id}">Details</a>
      <button class="add-to-cart-btn">Adauga in cos</button>
      
   </div>
`;
