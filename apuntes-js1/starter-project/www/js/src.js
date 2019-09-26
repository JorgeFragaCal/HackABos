'use strict';

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static buildItems(names, prices) {
    return names.map((name, index) => {
      return new Item(name, prices[index]);
    });
  }
}

class ShoppingCartItem extends Item {
  constructor(item) {
    super(item.name, item.price);
    this.units = 1;
  }

  increaseAmmount() {
    this.units++;
  }

  getTotalPrice() {
    return this.units * this.price;
  }
}

class User {
  #shoppingCart;
  constructor() {
    this.#shoppingCart = [];
  }

  addToCart(item) {
    const indexOfItem = this.getIndexOfItem(item);
    if (indexOfItem === null) {
      this.#shoppingCart.push(new ShoppingCartItem(item));
    } else {
      this.#shoppingCart[indexOfItem].increaseAmmount();
    }
  }

  getIndexOfItem(item) {
    for (let i = 0; i < this.#shoppingCart.length; i++) {
      if (this.#shoppingCart[i].name === item.name) {
        return i;
      }
    }
    return null;
  }

  goShopping(ammount, items) {
    for (let i = 0; i < ammount; i++) {
      const itemToAdd = Math.floor(Math.random() * (items.length - 0.01));
      this.addToCart(items[itemToAdd]);
    }
  }

  getShoppingCart() {
    return this.#shoppingCart;
  }

  getallData() {
    this.#allData = { name: this.name, shoppingCart: this.#shoppingCart }
    return this.#allData;
  }
}

class Shop {
  static getTicket(shoppingCart) {
    let total = 0;
    for (const item of shoppingCart) {
      const itemTotal = item.getTotalPrice();
      total += itemTotal;
      console.log(`${item.name} | ${item.price} | x ${item.units}| ${itemTotal}`);
    }
    console.log('-------------------------------------------------');
    console.log(`TOTAL: ${total}`);
  }
}

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

const allItems = Item.buildItems(itemNames, itemPrices);

const myUser = new User();

myUser.goShopping(2000, allItems);
Shop.getTicket(myUser.getShoppingCart());
console.log(myUser.getShoppingCart());

myUser.myName = 'pepito';
console.log(myUser.getallData());
