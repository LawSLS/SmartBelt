import React, { useEffect, useState, useContext } from "react";
import "./css/ProductsList.css";
import Product from "./Product";
import fetcher from "../Services/fetcher";
import {
  priceFilterContext,
  genderFilterContext,
  searchFilterContext,
} from "../App";

const ProductsList = () => {
  const { filter, setFilter } = useContext(priceFilterContext);
  const { genderFilter, setGenderFilter } = useContext(genderFilterContext);
  const { searchFilter, setSearchFilter } = useContext(searchFilterContext);
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

  const MinMaxSorting = (a, b) => {
    if (filter === "Croissant") return a.price > b.price;
    return a.price < b.price;
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
  const genderFiltering = (t) => {
    return t.sexe === genderFilter.toLowerCase() || genderFilter == "";
  };

  const searchFiltering = (t) => {
    return t.title.toLowerCase().match(searchFilter.toLowerCase());
  };

  const searchFiltered = (t) => {
  
      if (searchFilter.length > 0) {
        return t
          .filter((product) => {
            console.log(searchFilter);
            console.log(product);
            return product.title.match(searchFilter);
          })
          .map((filteredProduct) => {
            return (
              <div className="col">
                console.log(filteredProduct._id);
                <Product key={filteredProduct._id} product={filteredProduct} />
              </div>
            );
          });
      }
   
  };

  const Prix = filtrePrix(productList);
  const Gender = genderFiltred(productList);
  const Search = searchFiltered(productList);

  // function allFilters() {
  //   if (genderFilter.length > 0) {
  //     return Gender;
  //   } else if (filter.length > 0) {
  //     return Prix;
  //   } else if (searchFilter.length > 0) {
  //     return Search;
  //   }
  // }

  return (
    <div className="container">
      <div className="row ">
        {productList
          .filter((x) => {
            return genderFiltering(x) && searchFiltering(x);
          })
          .sort((a, b) => {
            MinMaxSorting(a, b);
          })
          .map((product) => {
            return (
              <div className="col m-2 wrapper">
                <Product key={product._id} product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductsList;
