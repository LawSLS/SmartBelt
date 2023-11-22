import React, {useContext} from "react";
import "./css/Filter.css";
import {priceFilterContext, genderFilterContext, searchFilterContext} from "../App"


function Filter() {
    const {filter, setFilter} = React.useContext(priceFilterContext);
    const {genderFilter, setGenderFilter} = React.useContext(genderFilterContext);
    const {searchFilter, setSearchFilter} = React.useContext(searchFilterContext)

    
  return (
    <div className="row m-3 btnGroup align-items-center">
      <button type="button" className="rounded-pill col col-lg-1 btn btn-sm btn-outline-dark m-3" onClick={() => setFilter("Croissant")}>
        Prix &#x279A;
      </button>
      <button type="button" className="rounded-pill col col-lg-1 btn btn-sm btn-outline-dark m-3" onClick={() => setFilter("Decroissant")}>
        Prix &#x2798;
      </button>
      <button type="button" className="rounded-pill col col-lg-1 btn btn-sm btn-outline-dark m-3" onClick={() => setGenderFilter("Homme")}>
        Homme
      </button>
      <button type="button" className="rounded-pill col col-lg-1 btn btn-sm btn-outline-dark m-3" onClick={() => setGenderFilter("Femme")}>
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
