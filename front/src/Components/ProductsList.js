import React, { useEffect, useState, useContext } from "react";
import "./css/ProductsList.css";
import Product from "./Product";
import fetcher from "../Services/fetcher";
import { priceFilterContext, genderFilterContext } from "../App";


const ProductsList = () => {
  const { filter, setFilter } = useContext(priceFilterContext);
  const {genderFilter, setGenderFilter} = useContext(genderFilterContext);

  // const [filterSexe, setFilterSexe] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetcher("http://localhost:3050/api/products").then((data) => {
      setProductList(data);
    });
  }, []);

  const filtrePrix = (t) => {
    if (filter === "Croissant") {
      const productCroissant = 
    t.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      }).map((sortedProducts) => {
        return (
          <div className="col">
            <Product key={sortedProducts._id} product={sortedProducts} />
          </div>
        );
      });
      return productCroissant
    } else if (filter === "Decroissant") {
     const productDecroissant =  t.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      }).map((sortedProducts) => {
        return (
          <div className="col">
            <Product key={sortedProducts._id} product={sortedProducts} />
          </div>
        );
      });
      return productDecroissant;
    }
  };

  const genderFiltred = (t) =>{if(genderFilter === "Femme" || genderFilter === "Homme") {
   const gendreFiltre = t.filter((product) =>  {return product.sexe === genderFilter}).map((sortedProducts) =>  
    { console.log("Filtered Products:", sortedProducts + genderFilter);return (
      <div className="col">
        <Product key={sortedProducts._id} product={sortedProducts} />
      </div>
       
      
    );
   
      
    })
    return gendreFiltre;
    
  }} 

const Prix = filtrePrix(productList);
const Gender = genderFiltred(productList);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-4 g-2 text center">
        {filter === "" || genderFilter === ""
          ? productList.map((product) => {
              return (
                <div className="col">
                  <Product key={product._id} product={product} />
                </div>
              );
            })
          : (Prix.length > 0 ? Prix : Gender.length > 0 ? Gender : null)}
      </div>
    </div>
  );
};
export default ProductsList;
