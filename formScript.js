document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("http://localhost:3050/api/addProduct", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
});
