// Function to retrieve products from localStorage
function getproducts() {
  const products = localStorage.getItem("products");

  if (products) {
    return JSON.parse(products);
  }
  return [];
}

// Function to save products to localStorage
function saveproducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
  return products;
}

// Function to add a product to the existing products
function addproduct(product) {
  const products = getproducts();
  products.push(product);
  saveproducts(products);
  return products;
}

// Function who update the quantity of a product in the product
function updateOrSaveQuantity(currentProduct) {
  const products = getproducts();
  const index = products.findIndex(
    (product) => product.product._id === currentProduct.product._id
  );
  if (index !== -1) {
    products[index].quantity++;
    saveproducts(products);
    return products;
  }
  addproduct(currentProduct);
  return products;
}

// Function to update a product in the existing products
function updateproduct(updatedproduct) {
  console.log(updatedproduct);
  const products = getproducts();
  const index = products.findIndex(
    (product) => product.product._id === updatedproduct.product._id
  );
  if (index !== -1) {
    products[index] = updatedproduct;
    saveproducts(products);
  }
  return products;
}

// Function to delete a product from the existing products
function deleteproduct(currentProduct) {
  console.log(currentProduct);
  const products = getproducts();
  const filteredproducts = products.filter((product) => {
    return product.product._id !== currentProduct._id;
  });
  saveproducts(filteredproducts);
  return products;
}

// Add Quantity to a product
function addQuantity(product) {
  product.quantity++;
  return updateproduct(product);
}

function subQuantity(product) {
  product.quantity--;
  return updateproduct(product);
}

export {
  getproducts,
  addproduct,
  updateproduct,
  deleteproduct,
  updateOrSaveQuantity,
  addQuantity,
  subQuantity,
};
