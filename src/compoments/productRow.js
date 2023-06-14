export const createProductRow = (product) => `
<tr key={product.id}>
<td> <img src=${product.image} width='60px' height='60px'/> </td>
<td>${product.product}</td>
<td>${product.price} RON</td>
<td>TEST</td>
<td> <button id="removeProduct">Remove</button></td>
</tr>`;
