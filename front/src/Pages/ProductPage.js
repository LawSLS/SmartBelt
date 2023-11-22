import React, { useEffect } from "react";
import ProductsList from "../Components/ProductsList";
import "./css/ProductPage.css";
import Filter from "../Components/Filter";

const ProductPage = () => {
  return (
    <div className="z-3">
      <div className="container-fluid bannerContainer m-0 p-0">
        {/* <div className="row reveal">
          <div className="col bannerContent" id="bannerContent">
            <h2 className="h2 m-4 fw-bold titleCatalogue text-white">
              Préparer l'été avec nos lunettes de soleil
            </h2>
            <p className="intro m-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              libero esse ducimus molestias ea dolores magni asperiores dolor
              repudiandae architecto vitae nemo corrupti quae nesciunt vero,
              nisi incidunt tenetur harum? Eveniet beatae soluta accusantium!
              Eos, delectus. Iste ullam cumque similique consequuntur, ducimus
              dolore incidunt omnis corrupti distinctio vero accusantium non?
            </p>
            <div className="row">
              <div className="col-2">
                <button className="btn m-4 rounded-pill fw-bold persoBtn">
                  Acheter
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="h2 fw-bold titleCatalogue">Catalogue produit</h2>
        </div>
      </div>
      <div>
        <Filter />
      </div>
      <div className="displayProduct">
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductPage;
