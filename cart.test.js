var Cart = require('./cart.js');

var p1 = {
  productID : "46D697B",
  name : "Orange Juice",
  priceOne: 10
};

var p2 = {
  productID : "6798GHU",
  name : "Apple Juice",
  priceOne: 10
};
//console.log(p2.name);
var myCart = new Cart();
myCart.addItem(p1);
console.log(myCart.hasProduct(p1));

myCart.addItem(p1);
var myItem = myCart.getItem(p1);
if(myItem!=null){
  console.log("The count is: "+myItem.count);
  console.log("The price is: "+myItem.price+", which is "+myItem.count+" * the actual price: "+p1.priceOne);
}
else {
  console.log("The count is: "+0);
}

myCart.removeItem(p1);

var myItem = myCart.getItem(p1);
if(myItem!=null){
  console.log("The count is: "+myItem.count);
  console.log("The price is: "+myItem.price+", which is "+myItem.count+" * the actual price: "+p1.priceOne);
}
else {
  console.log("The count is: "+0);
}

myCart.addItem(p2);

console.log(myCart.getTotal());

myCart.clearCart();

console.log(myCart.getTotal());
