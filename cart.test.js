var Cart = require('./cart.js');

var p1 = {
  productID : "46D697B",
  name : "Orange Juice",
  price: 10
};

var p2 = {
  productID : "6798GHU",
  name : "Apple Juice",
  price: 10
};
//console.log(p2.name);
//var myCart = new Cart([]);
Cart.addItem(p1);
console.log(Cart.hasProduct(p1));

/*Cart.addItem(p1);
var myItem = Cart.getItem(p1);
if(myItem!=null){
  console.log("The count is: "+myItem.count);
  console.log("The price is: "+myItem.price+", which is "+myItem.count+" * the actual price: "+p1.priceOne);
}
else {
  console.log("The count is: "+0);
}

Cart.removeItem(p1);
var myItem = Cart.getItem(p1);
if(myItem!=null){
  console.log("The count is: "+myItem.count);
  console.log("The price is: "+myItem.price+", which is "+myItem.count+" * the actual price: "+p1.priceOne);
}
else {
  console.log("The count is: "+0);
}

Cart.addItem(p2);
cosole.log(Cart.getTotal());
Cart.clearCart();
cosole.log(Cart.getTotal());
*/
