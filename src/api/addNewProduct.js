import { productsURL } from "../pages/constants";
export const addNewProductToAPI = async (newProduct) => {
  newProduct = {
    product: document.getElementById("productName").value,
    image: document.getElementById("productImg").value,
    price: document.getElementById("productPrice").value,
    brand: document.getElementById("productBrand").value,
    category: document.getElementById("productCateg").value,
    description: document.getElementById("productDescription").value,
    oflactoryNotes: document.getElementById("productNotes").value,
    quantityInStock: document.getElementById("productStock").value,
  };
  try {
    const response = await fetch(productsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      const product = await response.json();
      alert("Produsul a fost adăugat cu succes!");
      console.log(product);
    } else {
      alert("Eroare la adăugarea produsului. Vă rugăm să încercați din nou.");
    }
  } catch (error) {
    console.log(error);
  }
};
