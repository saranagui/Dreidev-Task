var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Cart = new Schema({

      items: [{
        product: {
          productID: {type: String, required:true},
          name: {type: String, required:true},
          priceOne: {type: Number, required:true}
        },
        count: {type: Number, default:1},
        //price: priceOne*count
        price:0
      }]

});

var myCart = mongoose.model('Cart', Cart);

module.exports.getItems = function(){
      return Cart.items;
}

module.exports.hasProduct = function(product){
      var i;
      for(i=0;i<myCart.items.length;i++)
      {
        if(myCart.items[i].product.productID==product.productID)
            return true;
      }
      return false;
};

//how to add
module.exports.addItem = function(product){
      var i;
      console.log(typeof(Cart.items));
      for(i=0;i<myCart.items.length;i++)
      {
        if(myCart.items[i].product.productID==product.productID)
        {
             myCart.items[i].count++;
             return;
        }
      }
      //add a complete new one
      return;
};

module.exports.removeItem = function(product){
      var i;
      for(i=0;i<Cart.items.length;i++)
      {
        if(myCart.items[i].product.productID==product.productID)
        {
             myCart.items[i].count--;
             if(myCart.items[i].count==0)
                //remove it completely
             return;
        }
      }

      return;
};

module.exports.removeProduct = function(product){
      var i;
      for(i=0;i<myCart.items.length;i++)
      {
        if(myCart.items[i].product.productID==product.productID)
        {
                //remove it completely
             return;
        }
      }

      return;
};

module.exports.getItem = function(product){
      var i;
      for(i=0;i<myCart.items.length;i++)
      {
        if(myCart.items[i].product.productID==product.productID)
        {
             return Cart.items[i];
        }
      }

      return null;
};

module.exports.getTotal = function(){
      var i,total=0;
      for(i=0;i<myCart.items.length;i++)
      {
             total=total+myCart.items[i].price;
      }
      return total;
};

module.exports.clearCart = function(){
    myCart.items = [];
    return;
};
module.exports = myCart;
