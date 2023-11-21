import React, {useContext} from "react";
import "./css/Filter.css";
import {priceFilterContext, genderFilterContext} from "../App"


function Filter() {
    const {filter, setFilter} = React.useContext(priceFilterContext);
    const {genderFilter, setGenderFilter} = React.useContext(genderFilterContext);


  return (
    <div className="row m-3">
      <button type="button" className="rounded-pill col-1 btn btn-outline-dark m-2" onClick={() => setFilter("Croissant")}>
        Prix Croissant
      </button>
      <button type="button" className="rounded-pill col-1 btn btn-outline-dark m-2" onClick={() => setFilter("Decroissant")}>
        Prix Décroissant
      </button>
      <button type="button" className="rounded-pill col-1 btn btn-outline-dark m-2" onClick={() => setGenderFilter("Homme")}>
        Homme
      </button>
      <button type="button" className="rounded-pill col-1 btn btn-outline-dark m-2" onClick={() => setGenderFilter("Femme")}>
        Femme
      </button>
      <form class="col m-3 " role="search">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search" id="searchBar"/>
      </form>
    </div>
  );
}

export default Filter;
