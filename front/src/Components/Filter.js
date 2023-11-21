import React, {useContext} from "react";
import "./css/Filter.css";
import {priceFilterContext} from "../App"
import {genderFilterContext} from "../App"

function Filter() {
    const {filter, setFilter} = React.useContext(priceFilterContext);
    const {genderFilter, setGenderFilter} = React.useContext(genderFilterContext);


  return (
    <div className="row m-2">
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
    </div>
  );
}

export default Filter;
