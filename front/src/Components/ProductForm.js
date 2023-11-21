import React from "react";
import "./css/ProductForm.css";

const ProductForm = () => {
  const formData = new FormData();
  return (
    <div className="row mx-auto p-5 justify-content-evenly align-items-center">
      <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center ">
        <h2>Ajouter un article</h2>
        <p>petite phrase</p>
      </div>
      <div className="col-12 col-md-12 col-lg-6 form-container">
        <div className="">
          <form id="form">
            <div class="mb-3">
              <input
                type="text"
                placeholder="Titre de l'article"
                class="form-control"
                name="title"
                id="title"
                aria-describedby="titleHelp"
              />
            </div>
            <div class="mb-3">
              <input
                type="file"
                className="form-control"
                name="productImg"
                id="productImg"
              />
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Merci de décrire l'article"
                  name="description"
                  id="description"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="description">Description de l'article</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  name="sexe"
                  placeholder="Sexe"
                  id="sexe"
                  aria-describedby="sexeHelp"
                />

                <input
                  type="text"
                  className="form-control"
                  id="categorie"
                  name="categorie"
                  placeholder="categorie de l'article"
                  aria-describedby="categorieHelp"
                />
              </div>
            </div>

            <div class="mb-3">
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Prix"
                  name="price"
                  id="price"
                  aria-describedby="priceHelp"
                />

                <input
                  type="number"
                  className="form-control"
                  name="oldPrice"
                  placeholder="Prix avant reduction"
                  id="oldPrice"
                  aria-describedby="oldPriceHelp"
                />
              </div>
            </div>

            <button type="submit" className="btn rounded-pill">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
