/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
   
   var subtotal;
   var tax;
   var shippingCost;
   var grandTotal;

   function loop() {
       var i;
       subtotal = 0;
       tax = 0;
       for (i = 0; i < filenames.length; i++) {
           var total = quantities[i] * prices[i];
           outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total.toFixed(2));
           subtotal = subtotal + total;
       }
       subtotal = subtotal;
       tax = (subtotal * 0.10);
       shippingCost = shippingCost(subtotal);
       grandTotal = subtotal + tax + shippingCost;
   }
