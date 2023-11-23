import React from "react";
// Importer mes fonctions de Product.js :
import {
  deleteproduct,
  getproducts,
  addQuantity,
  subQuantity,
} from "../Services/CartService";
import "./css/Cart.css";
import { CartContext } from "../App";

function checkout() {
  function priceTotal() {
    let cart = getproducts();
    let price = 0;
    cart.map((item) => {
      price += item.product.price * item.quantity;
    });
    return price;
  }

  return (
    <div>
      <div className="py-5 text-center">
        <h2>Ma commande</h2>
      </div>

      <div className="row justify-content-end mx-auto">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Votre panier</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {getproducts().map((item) => {
              return (
                <>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{item.product.title}</h6>
                      <small className="text-muted">
                        {item.product.description}
                      </small>
                    </div>
                    <span className="text-muted">
                      {item?.product?.price * item.quantity}€
                    </span>
                  </li>
                </>
              );
            })}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (EUR)</span>
              <strong>{priceTotal()}€</strong>
            </li>
          </ul>
        </div>
        <div className="col-6"></div>

        <form className="card p-2 col-lg-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Code promo"
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary">
                Appliquer
              </button>
            </div>
          </div>
        </form>

        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Adresse de facturation</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3 col-5">
              <label for="username">Nom d'utilisateur</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Nom d'utilisateur"
                  required
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3 col-5">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="toto@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label for="address">Addresse</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="42 boulevard Général de Gaulle"
                required
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label for="country">Pays</label>
                <select
                  className="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Pays...</option>
                  <option>France</option>
                  <option>Belgique</option>
                  <option>Espagne</option>
                  <option>USA</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State</label>
                <select
                  className="custom-select d-block w-100"
                  id="state"
                  required
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Code postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" for="same-address">
                L'adresse de facturation et de livraison sont les mêmes.
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" for="save-info">
                Enregistrer ces informations pour la prochaine fois
              </label>
            </div>

            <h4 className="mb-3">Paiment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked
                  required
                />
                <label className="custom-control-label" for="credit">
                  Carte bancaire
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" for="debit">
                  Bitcoin
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" for="paypal">
                  Paypal
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="cc-name">Nom sur la carte bancaire</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number">Numéro sur la carte bancaire</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>
            <button className="btn  btn-lg btn-outline-dark" type="submit">
              Confirmer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default checkout;
