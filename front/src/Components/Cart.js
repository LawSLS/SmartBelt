import react, { useContext, useEffect, useState } from "react";
// Importer mes fonctions de Product.js :
import {
  deleteproduct,
  getproducts,
  addQuantity,
  subQuantity,
} from "../Services/CartService";
import "./css/Cart.css";
import { CartContext } from "../App";
import {Link} from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  function priceTotal() {
    let cart = getproducts();
    let price = 0;
    cart.map((item) => {
      price += item.product.price * item.quantity;
    });
    return price;
  }

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Votre panier
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="card cart mb-3">
            <div className="row g-0">
              {getproducts().map((item) => {
                return (
                  <>
                    <div className="col-md-4">
                      <img
                        src={`http://localhost:3050/` + item.product.img}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body card shadow">
                        <div>
                          <h5 className="card-title cart-title fw-bold">
                            {item.product?.title}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => setCart(deleteproduct(item.product))}
                          ></button>
                        </div>
                        <hr />
                        <p className="card-text cart-text fs-5">
                          {item.product?.description}
                        </p>

                        <p className="card-text cart-text d-flex justify-content-evenly">
                          <small className="text-body-secondary text-center price">
                            {item.product?.price} €
                          </small>
                          <small className="text-body-secondary">
                            {/* Création d'un bouton d'incrémentation de quantité */}
                            <button
                              className="btn btn-outline-primary me-2"
                              onClick={() => setCart(addQuantity(item, 1))}
                            >
                              +
                            </button>
                            {item?.quantity}
                            <button
                              className="btn btn-outline-primary ms-2"
                              onClick={() => setCart(subQuantity(item, -1))}
                            >
                              -
                            </button>
                          </small>
                        </p>
                        {/* Ajout du prix total du currentproduct */}
                        <p className="card-text cart-text d-flex justify-content-evenly prix">
                          <small className="text-body-secondary text-center price">
                            Total de l'article :{" "}
                            {item?.product?.price * item.quantity} €
                          </small>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* Ajout du prix total de tous les product */}
              <div className="card-body card shadow mt-3">
                <p className="card-text cart-text d-flex justify-content-evenly text-center prix fw-bold">
                  Total du panier : {priceTotal()} €
                </p>
              </div>
              <div className="row text-center">
              <Link to="/checkout">
              <button class="btn btn-outline-dark m-2 btn-lg btn-block" type="submit">
              Confirmer
            </button>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
