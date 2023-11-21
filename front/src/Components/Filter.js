import React, {useContext} from "react";
import "./css/Filter.css";
import {priceFilterContext, genderFilterContext, searchFilterContext} from "../App"


function Filter() {
    const {filter, setFilter} = React.useContext(priceFilterContext);
    const {genderFilter, setGenderFilter} = React.useContext(genderFilterContext);
    const {searchFilter, setSearchFilter} = React.useContext(searchFilterContext)

    
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
      <nav class="navbar col-4">
      <form class="col m-3" role="search">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>
      </form>
      </nav>
    </div>
  );
}

export default Filter;
