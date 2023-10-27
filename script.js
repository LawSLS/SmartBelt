const productListContainer = document.getElementById("containerProductList");

$("#logo").animate(
  {
    opacity: 1,
    height: "50%",
  },
  800,
  function () {
    // Animation complete.
  }
);

const url = "http://localhost:3000/products";
const btn_triDecroissant = document.querySelector("#triDecroissant");

async function fetcher(link) {
  let request = await fetch(link);
  let data = await request.json();
  return data;
}

prod = [];

cart = [];

to_display_products = [];
function clean_products_card() {
  let card = $(".card_parent");
  card.remove();
}

function display_products_card() {
  to_display_products.forEach((product) => {
    //creer une colonne
    let divCol = document.createElement("div");
    divCol.classList.add("col");
    divCol.classList.add("card_parent");

    divCol.innerHTML = `
<div class="card shadow border-0">
   <img class="card-img-top" src='${product.img}'/>
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <p class="fw-bold" >${product.price}€</p>
      <button class="btn position-absolute bottom-0 end-0 addToCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </button>
    </div>
</div>`;

    productListContainer.appendChild(divCol);
  });
}
function tri_prix_ordre_croissant() {
  clean_products_card();
  to_display_products = prod.sort(function compare(
    prix_indice_actuel,
    prix_indice_plus_un
  ) {
    if (prix_indice_actuel.price < prix_indice_plus_un.price) return -1;
    if (prix_indice_actuel.price > prix_indice_plus_un.price) return 1;
    return 0;
  });
  display_products_card();
}
function tri_prix_ordre_decroissant() {
  clean_products_card();
  to_display_products = prod.sort(function compare(
    prix_indice_actuel,
    prix_indice_plus_un
  ) {
    if (prix_indice_actuel.price > prix_indice_plus_un.price) return -1;
    if (prix_indice_actuel.price < prix_indice_plus_un.price) return 1;
    return 0;
  });
  display_products_card();
}
function tri_par_sexe_femme() {
  clean_products_card();
  to_display_products = prod.filter((produit) => produit.sexe === "femme");
  display_products_card();
}
function tri_par_sexe_homme() {
  clean_products_card();
  to_display_products = prod.filter((produit) => produit.sexe === "homme");
  display_products_card();
}
function displayCartProduct(customerCart) {
  const cartContainer = document.querySelector("#cart");

  let divCart = document.createElement("div");
  divCart.classList.add("card-body");
  divCart.classList.add("p-4");

  const totalContainer = document.querySelector("#total-cart");
  let total = 0;

  // const notifPanier = document.querySelector("#notification-panier");
  // notifPanier.textContent = customerCart.length;
  const titleCart = document.querySelector("#nb-article");

  titleCart.innerHTML = `Votre panier: ${customerCart.length}`;

  for (let i = 0; i < customerCart.length; i++) {
    const currentProduct = customerCart[i];
    //Faire le total du panier
    total += parseInt(currentProduct.price.slice(0, -1));

    divCart.innerHTML = `
    <div id='cart-item' class="row d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img
        src="${currentProduct.img}"
        class="img-fluid rounded-3" alt="Cotton T-shirt" />
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <p id='title' class="lead fw-normal mb-2">${currentProduct.title}</p>
    </div>

    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h5 class="mb-0">${currentProduct.price}</h5>
    </div>
    <div id="delete-product" class="col-md-1 col-lg-1 col-xl-1 text-end">
      <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
    </div>
  </div>
  </div>`;

    totalContainer.innerHTML = `
    <hr>
    <div>
    <p>Total: ${total}</p>
    </div>`;

    cartContainer.prepend(divCart);
    const deleteCartBtn = document.querySelector("#delete-product");
    const cartItem = document.querySelector("#cart-item");
    const productTitle = document.querySelector("#title");
    deleteCartBtn.addEventListener("click", () => {
      console.log(productTitle);
      cartItem.remove();
      deleteProductCart(productTitle.innerHTML);
    });
  }
}

const productTitle = document.querySelector("#title");

function deleteProductCart(name) {
  console.log(cart);
  for (let item in cart) {
    if (cart[item].title == name) {
      cart.splice(item, 1);
      console.log(cart);
      displayCartProduct(cart);
    }
  }
}

fetcher(url)
  .then((products) => {
    //function pour filtrer les produits sans propriété ou erronés
    function productsWithoutError(productsArray) {
      function titleError(product) {
        const conditionError = [
          product.title == "",
          typeof product.title != "string",
        ];
        return conditionError.includes(true);
      }

      function imgError(product) {
        const conditionError = [
          product.img == "",
          typeof product.img != "string",
        ];
        return conditionError.includes(true);
      }

      function descriptionError(product) {
        const conditionError = [
          product.description == "",
          typeof product.description != "string",
        ];

        return conditionError.includes(true);
      }

      function priceError(product) {
        const conditionError = [
          typeof product.price != "number",
          product.price <= 0,
        ];
        return conditionError.includes(true);
      }

      let productslist;

      productslist = productsArray.filter((product) => {
        const conditionError = [
          titleError(product),
          imgError(product),
          descriptionError(product),
          priceError(product),
        ];

        return !conditionError.includes(true);
      });

      return productslist;
    }

    const searchBar = document.querySelector("#searchBar");
    searchBar.addEventListener("keyup", (e) => {
      clean_products_card();
      to_display_products = prod.filter((element) => {
        return element.title.startsWith(e.target.value);
      });
      display_products_card();
    });
    const sanitizeProductsList = productsWithoutError(products);
    prod = sanitizeProductsList;

    to_display_products = prod;
    display_products_card();

    //tri prix order croissant
    const btn_triCroissant = document.querySelector("#triCroissant");
    btn_triCroissant.addEventListener("click", () => {
      tri_prix_ordre_croissant();
    });

    //tri prix order decroissant
    const btn_triDecroissant = document.querySelector("#triDecroissant");
    btn_triDecroissant.addEventListener("click", () => {
      tri_prix_ordre_decroissant();
    });
    //tri par sexe femme
    const btn_trifemme = document.querySelector("#trifemme");
    btn_trifemme.addEventListener("click", () => {
      tri_par_sexe_femme();
    });
    //tri par sexe homme
    const btn_trihomme = document.querySelector("#trihomme");
    btn_trihomme.addEventListener("click", () => {
      tri_par_sexe_homme();
    });

    //----------------filtre par prix----------------
    const minPrice = document.querySelector("#Min");
    minPrice.addEventListener("keyup", (e) => {
      clean_products_card();
      to_display_products = prod.filter((element) => {
        if (e.target.value < element.price) {
          return element;
        }
      });
      display_products_card();
    });

    const maxPrice = document.querySelector("#Max");
    maxPrice.addEventListener("keyup", (e) => {
      clean_products_card();
      to_display_products = prod.filter((element) => {
        if (e.target.value > element.price) {
          return element;
        }
      });
      display_products_card();
    });
    //----------------end filtre par prix----------------

    $(".addToCart").click(function () {
      const productSelect = $(this.offsetParent);

      const imgProduct = productSelect[0].children[0].src;
      const title = productSelect[0].children[1].children[0].innerText;
      const price = productSelect[0].children[1].children[2].innerText;

      const productToAdd = { img: imgProduct, title: title, price: price };
      cart.push(productToAdd);

      displayCartProduct(cart);
    });

    $(".card").animate(
      {
        opacity: 1,
        width: "90%",
      },
      800,
      function () {
        // Animation complete.
      }
    );
  })

  .catch((error) => {
    console.log(error.message);
  });
