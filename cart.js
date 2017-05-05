
function myCart (){

      //the list of items in a cart
      this.items = [{
        product: {
          productID: {type: String, required:true},
          name: {type: String, required:true},
          priceOne: {type: Number, required:true}
        },
        count: {type: Number, default:1},
        //price: priceOne*count
        price:0
      }]

      //get all items
      this.getItems = function(){
            return this.items;
      }

      //boolean if item exists in the cart
      this.hasProduct = function(product){
            var i;
            for(i=0;i<this.items.length;i++)
            {
              if(this.items[i].product.productID==product.productID)
                  return true;
            }
            return false;
      };

      //add an item
      this.addItem = function(newProduct){
            var i;
            for(i=0;i<this.items.length;i++)
            {
              //increment the amount if already exists
              if(this.items[i].product.productID==newProduct.productID)
              {
                   this.items[i].count++;
                   this.items[i].price = this.items[i].product.priceOne * this.items[i].count;
                   return;
              }
            }
            //add a complete new one
            this.items.push({product: newProduct, count: 1, price: newProduct.priceOne})
            return;
      };

      //remove an item
      this.removeItem = function(product){
            var i;
            for(i=0;i<this.items.length;i++)
            {
              if(this.items[i].product.productID==product.productID)
              {
                   this.items[i].count--;
                   this.items[i].price = this.items[i].product.priceOne * this.items[i].count;
                   if(this.items[i].count==0)
                    this.items.slice(i,1);
                   return;
              }
            }

            return;
      };

      //remove the product completely
      this.removeProduct = function(product){
            var i;
            for(i=0;i<this.items.length;i++)
            {
              if(this.items[i].product.productID==product.productID)
              {
                    this.items.slice(i,1);
              }
            }

            return;
      };

      //return specific item
      this.getItem = function(product){
            var i;
            for(i=0;i<this.items.length;i++)
            {
              if(this.items[i].product.productID==product.productID)
              {
                   return this.items[i];
              }
            }

            return null;
      };

      //return cart total
      this.getTotal = function(){
            var i,total=0;
            for(i=0;i<this.items.length;i++)
            {
                   total=total+this.items[i].price;
            }
            return total;
      };

      //clears the whole cart
      this.clearCart = function(){
          this.items = [];
          return;
      };
};

module.exports = myCart;
