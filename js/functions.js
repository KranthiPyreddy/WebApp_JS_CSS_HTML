/* define functions here 

function calculateTotal(quantities, prices) {
    for (i = 0; i < quantities.length; i++) {
        return quantities[i] * prices[i];
} 
*/
function outputCartRow(file, title, quantity, price, total) {

    var row =
        "<tr>" +
        "<td> <img src = images/" + file + "> </img> </td>" +
        "<td> " + title + "</td> " +
        "<td> " + quantity + " </td> " +
        "<td> $" + price + " </td> " +
        "<td> $" + total + " </td> " +
        " </tr>";
    document.write(row);
}

function shippingCost(subtotal) {
    var Cost = 40;
    if (subtotal > 1000) {
        Cost = 0;
    } 
    return Cost;
}

