const multer = require("multer");
//Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads/products");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
