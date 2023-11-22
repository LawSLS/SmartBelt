import React, { useRef } from "react";

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleInput = (e) => {
    const file = e.target.files[0];
    if (!file) {
      onFileSelectError({ error: "Fichier trop volumineux" });
    } else {
      onFileSelectSuccess(file);
    }
  };

  return (
    <>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          name="productImg"
          onChange={handleInput}
          id="productImg"
        />
      </div>
    </>
  );
};

export default FileUploader;
