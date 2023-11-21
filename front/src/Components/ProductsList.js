import React, { useEffect, useState, useContext } from "react";
import "./css/ProductsList.css";
import Product from "./Product";
import fetcher from "../Services/fetcher";
import { priceFilterContext, genderFilterContext } from "../App";

const ProductsList = () => {
  const { filter, setFilter } = useContext(priceFilterContext);
  const { genderFilter, setGenderFilter } = useContext(genderFilterContext);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetcher("http://localhost:3050/api/products").then((data) => {
      setProductList(data);
    });
  }, []);

  const filtrePrix = (t) => {
    if (filter === "Croissant") {
      const productCroissant = t
        .sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        })
        .map((sortedProducts) => {
          return (
            <div className="col">
              <Product key={sortedProducts._id} product={sortedProducts} />
            </div>
          );
        });
      return productCroissant;
    } else if (filter === "Decroissant") {
      const productDecroissant = t
        .sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        })
        .map((sortedProducts) => {
          return (
            <div className="col">
              <Product key={sortedProducts._id} product={sortedProducts} />
            </div>
          );
        });
      return productDecroissant;
    }
  };

  const genderFiltred = (t) => {
    if (genderFilter === "Femme" || genderFilter === "Homme") {
      console.log(t);
      return t
        .filter((product) => {
          return product.sexe === genderFilter.toLowerCase();
        })
        .map((sortedProducts) => {
          return (
            <div className="col">
              <Product key={sortedProducts._id} product={sortedProducts} />
            </div>
          );
        });
    }
  };

  const Prix = filtrePrix(productList);
  const Gender = genderFiltred(productList);
  
  function allFilters () {
   if(genderFilter.length > 0 ) {
    return Gender;
   } else if(filter.length > 0){
    return Prix;
   }
  }


  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-4 g-2 text center">
        { genderFilter ===""  && filter ==="" ?
           productList.map((product) => {
            return (
              <div className="col">
                <Product key={product._id} product={product} />
              </div>
            );
          }): allFilters()
          
         }
      </div>
    </div>
  );
};
export default ProductsList;
