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

// Tous les produits
let products = [
  {
    id: 0,
    title: "Ceinture en cuir Marron",
    img: "./img/ceintureFemmeGucci.jpg",
    description: "Ceinture en cuir marron",
    categorie: "homme",
    price: 99,
    oldPrice: "",
  },
  {
    id: 1,
    title: "Ceinture en cuir Marron",
    img: "./img/ceintureFemmeGucci.jpg",
    description: "Ceinture Gucci",
    categorie: "femme",
    price: 120,
    oldPrice: "",
  },
  {
    id: 2,
    title: "Ceinture de styliste",
    img: "./img/ceintureDeStylistePourHomme.jpg",
    description: "Ceinture fomme styliste",
    categorie: "ceinture",
    price: 200,
    oldPrice: "",
  },
  {
    id: 3,
    title: "Ceinture en cuir Marron",
    img: "./img/ceintureVintageFemme.jpg",
    description: "Ceinture vintage femme",
    categorie: "ceinture",
    price: 80,
    oldPrice: "",
  },
];

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
    const conditionError = [product.img == "", typeof product.img != "string"];
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

let sanitizeProductsList = productsWithoutError(products);
const btn_tridecroissant = document.querySelector("#triDecroissant");
const btn_tricroissant = document.querySelector("#triCroissant");
sanitizeProductsList.forEach((product) => {
  //creer une colonne
  let divCol = document.createElement("div");
  divCol.classList.add("col");
  divCol.setAttribute("id", "cardColumns");

  divCol.innerHTML = `
  <div  id="${product.id}"class="card shadow border-0">
     <img class="card-img-top" src='${product.img}'/>
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="fw-bold" >${product.price}€</p>
        <button id=""addToCart class="btn position-absolute bottom-0 end-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </button>
      </div>
  </div>`;

  productListContainer.appendChild(divCol);
});

// fonction triDecroissant
btn_tridecroissant.addEventListener("click", () => {
  sanitizeProductsList.forEach(() => {
    productListContainer.removeChild(cardColumns);
  });
  sanitizeProductsList.sort(function compare(
    prix_indice_actuel,
    prix_indice_plus_un
  ) {
    if (prix_indice_actuel.price > prix_indice_plus_un.price) return -1;
    if (prix_indice_actuel.price < prix_indice_plus_un.price) return 1;
    return 0;
  });

  sanitizeProductsList.forEach((product) => {
    //creer une colonne
    let divCol = document.createElement("div");
    divCol.classList.add("col");
    divCol.setAttribute("id", "cardColumns");

    divCol.innerHTML = `
  <div  id="${product.id}"class="card shadow border-0">
     <img class="card-img-top" src='${product.img}'/>
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="fw-bold" >${product.price}€</p>
        <button id=""addToCart class="btn position-absolute bottom-0 end-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </button>
      </div>
  </div>`;

    productListContainer.appendChild(divCol);
  });
});


// fonction triCroissant
btn_tricroissant.addEventListener("click", () => {
  sanitizeProductsList.forEach(() => {
    productListContainer.removeChild(cardColumns);
  });
  sanitizeProductsList.sort(function compare(
    prix_indice_actuel,
    prix_indice_plus_un
  ) {
    if (prix_indice_actuel.price < prix_indice_plus_un.price) return -1;
    if (prix_indice_actuel.price > prix_indice_plus_un.price) return 1;
    return 0;
  });
  sanitizeProductsList.forEach((product) => {
    //creer une colonne
    let divCol = document.createElement("div");
    divCol.classList.add("col");
    divCol.setAttribute("id", "cardColumns");

    divCol.innerHTML = `
  <div  id="${product.id}"class="card shadow border-0">
     <img class="card-img-top" src='${product.img}'/>
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="fw-bold" >${product.price}€</p>
        <button id=""addToCart class="btn position-absolute bottom-0 end-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </button>
      </div>
  </div>`;

    productListContainer.appendChild(divCol);
  });
});
