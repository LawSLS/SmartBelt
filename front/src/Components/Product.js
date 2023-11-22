import React, { useEffect, useState } from "react";
import "./css/Product.css";

const Product = (props) => {
  const [productImg, setProductImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3050/${props.product.img}`).then((data) => {
      setProductImg(data.url);
    });
  }, []);

  return (
    <div
      className="card shadow border-0 overflow-hidden"
      style={{ width: "18rem" }}
    >
      <img
        className="card-img-top img-size imgStyle"
        src={productImg}
        alt={props.product.title}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.product.title}</h5>
        <p className="card-text text-secondary">{props.product.description}</p>
        <div className="d-flex justify-content-around">
          <div>
            <span class="fw-bold">{props.product.price}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-currency-euro"
                viewBox="0 0 16 16"
              >
                <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
              </svg>
            </span>
          </div>
          <span>
            <button className="btn btn-sm btnCard ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-plus"
                viewBox="0 0 16 16"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
