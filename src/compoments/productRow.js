export const createProductRow = (product) => `
<tr id="p${product.id}">
<td> <img src=${product.image} width='60px' height='60px'/> </td>
<td>${product.product}</td>
<td>${product.price} RON</td>
<td>${product.quantityInStock}</td>
<td> <button class="removeProduct">Remove</button></td>
</tr>`;
