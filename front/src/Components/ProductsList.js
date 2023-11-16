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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-4 g-2 text center">
        {productList.map((product) => {
          return (
            <div className="col">
              <Product key={product._id} product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsList;
