export const addProductToCart = (id) => {
  const cart = localStorage.getItem("cart");
  let cartArray = [];
  if (cart == null) {
    cartArray.push({ id: id, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cartArray));
  } else {
    cartArray = JSON.parse(cart);
    if (isProductAlreadyInCart(id, cartArray)) {
      incrementProductQuantity(id, cartArray);
    } else {
      cartArray.push({ id: id, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cartArray));
  }
};

export function isProductAlreadyInCart(id, cartArray) {
  const product = cartArray.find((product) => product.id === id);

  return product !== undefined;
}

export function incrementProductQuantity(id, cartArray) {
  const product = cartArray.find((product) => product.id === id);

  if (product != undefined) {
    product.quantity++;
  }
}

export function decrementProductQuantity(id, cartArray) {
  const product = cartArray.find((product) => product.id === id);

  if (product != undefined) {
    product.quantity--;
  }

  if (product.quantity == 0) {
    cartArray.splice(cartArray.indexOf(product), 1);
  }
}

export function getProductQuantityFromLocalStorage(id, cartArray) {
  const product = cartArray.find((product) => product.id === id);

  return product.quantity;
}
