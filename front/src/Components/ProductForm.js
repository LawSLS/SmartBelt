import React from "react";
import "./css/ProductForm.css";
import FileUploader from "./FileUploader";

const ProductForm = () => {
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [oldPrice, setOldPrice] = React.useState("");
  const [sexe, setSexe] = React.useState("");
  const [category, setCategory] = React.useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("productImg", file);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("oldPrice", oldPrice);
    formData.append("sexe", sexe);
    formData.append("categorie", category);

    fetch("http://localhost:3050/api/addProduct", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row mx-auto p-5 justify-content-evenly align-items-center pageWrapper">
      <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center ">
        <h2>Ajouter un article</h2>
        <p className="text-secondary">Vous ajoutez quoi aujourd'hui ?</p>
      </div>
      <div className="col-12 col-md-12 col-lg-6 form-container">
        <div className="">
          <form className="form" id="form">
            <h2 className="text-center text-white fs61">Formulaire</h2>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Titre de l'article"
                className="form-control"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                aria-describedby="titleHelp"
              />
            </div>
            <FileUploader
              onFileSelectSuccess={(file) => setFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Merci de décrire l'article"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="description">Description de l'article</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  name="sexe"
                  value={sexe}
                  onChange={(e) => setSexe(e.target.value)}
                  placeholder="Sexe"
                  id="sexe"
                  aria-describedby="sexeHelp"
                />

                <input
                  type="text"
                  className="form-control"
                  id="categorie"
                  name="categorie"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="categorie de l'article"
                  aria-describedby="categorieHelp"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Prix"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="price"
                  aria-describedby="priceHelp"
                />

                <input
                  type="number"
                  className="form-control"
                  name="oldPrice"
                  placeholder="Prix avant reduction"
                  value={oldPrice}
                  onChange={(e) => setOldPrice(e.target.value)}
                  id="oldPrice"
                  aria-describedby="oldPriceHelp"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={submitForm}
              className="btn rounded-pill"
            >
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
