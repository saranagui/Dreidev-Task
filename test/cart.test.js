var Cart = require('../cart.js');
var chai = require('chai');
var assert = chai.assert;

describe('Cart', function() {

  //start empty
  it('should start empty', function() {
    var myCart = new Cart();
    assert.equal(myCart.items.length, 0);
  });

  //get no items when empty
  it('should get no items when cart is empty', function() {
    var myCart = new Cart();
    var myCartItems = myCart.getItems();
    assert.equal(myCartItems.length, 0, "Cart is Empty!");
  });

  //get all items
  it('should get all items', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);

    var myCartItems = myCart.getItems();
    assert.equal(myCartItems.length, 1);
  });

  //contains the product
  it('contains the product and should return true', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);

    assert.equal(myCart.hasProduct(p1), true);
  });

  //doesn't contain the product
  it('does not contain the product and should return false', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();

    assert.equal(myCart.hasProduct(p1), false);
  });

  //add new item
  it('should add new item', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();

    myCart.addItem(p1);
    var myItem = myCart.getItem(p1);
    assert.equal(myItem.count, 1);
    });

  //add already existing item
  it('should add already existing item', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);

    myCart.addItem(p1);
    var myItem = myCart.getItem(p1);
    assert.equal(myItem.count, 2);
  });

  //remove an existing item
  it('should remove an existing item', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);
    myCart.addItem(p1);

    myCart.removeItem(p1);
    var myItem = myCart.getItem(p1);
    assert.equal(myItem.count, 1);
  });

  //remove last item so product gets deleted too
  it('should remove last item so product gets deleted too', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);

    myCart.removeItem(p1);
    assert.equal(myCart.getItem(p1), null);
  });

  //not remove anything if item doesn't exist
  it("should not remove anything if item doesn't exist", function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();

    myCart.removeItem(p1);
    assert.equal(myCart.getItem(p1), null);
  });

  //remove the whole product
  it('should remove the whole product', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);
    myCart.addItem(p1);

    myCart.removeProduct(p1);
    assert.equal(myCart.hasProduct(p1), false);
  });

  //not remove anything if product doesn't exist
  it("should not remove anything if product doesn't exist", function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();

    myCart.removeProduct(p1);
    assert.equal(myCart.hasProduct(p1), false);
  });

  //return specific item
  it('should return specific item', function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();
    myCart.addItem(p1);

    var myItem = myCart.getItem(p1);
    assert.equal(myItem.product.productID, "46D697B");
  });

  //return nothing if item doesn't exist
  it("should return nothing if item doesn't exist", function() {
    var p1 = {
      productID : "46D697B",
      name : "Orange Juice",
      priceOne: 10
    };
    var myCart = new Cart();

    var myItem = myCart.getItem(p1);
    assert.equal(myItem, null);
  });

  //return cart total
  it('should return cart total', function() {
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
    var myCart = new Cart();
    myCart.addItem(p1);
    myCart.addItem(p1);
    myCart.addItem(p1);
    myCart.removeItem(p1);
    myCart.addItem(p2);

    assert.equal(myCart.getTotal(), 30);
  });

  //return zero if cart is empty!
  it('should zero if cart is empty', function() {
    var myCart = new Cart();
    assert.equal(myCart.getTotal(), 0);
  });

  //clear the whole cart
  it('should clear the whole cart', function() {
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
    var myCart = new Cart();
    myCart.addItem(p1);
    myCart.addItem(p1);
    myCart.addItem(p1);

    myCart.clearCart();
    assert.equal(myCart.items.length, 0);
  });
  
});
