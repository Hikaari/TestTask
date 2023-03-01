class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

const products = [
  new Product("Apple", 1.99, 10, "A juicy apple"),
  new Product("Banana", 0.99, 20, "A sweet banana"),
  new Product("Orange", 2.99, 5, "A sour orange"),
  new Product("Grapes", 3.99, 15, "A bunch of grapes"),
];

const searchString = "we";

const minPrice = 3;
const maxQuantity = 10;

const filteredProducts = products.filter((product) => {
  if (product.name.includes(searchString) ||
      product.description.startsWith('we') ||
      product.description.endsWith('na')) {
    return true;
  }
  if (product.price > minPrice) {
    return true;
  }
  if (product.quantity > maxQuantity) {
    return true;
  }
  return false;
});

console.log(filteredProducts);

