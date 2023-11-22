import React, { useEffect, useState } from "react";
import "./css/ProductsList.css";
import Product from "./Product";
import fetcher from "../Services/fetcher";

const ProductsList = () => {
  //   const [filterSexe, setFilterSexe] = useState("");
  //   const [orderFilter, setOrderFilter] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetcher("http://localhost:3050/api/products").then((data) => {
      setProductList(data);
    });
  }, []);

  console.log(productList);

  return (
    <div className="container">
      <div className="row">
        {productList.map((product) => {
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
