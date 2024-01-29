const multer = require("multer");
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const upload = multer({
  limits: { MAX_SIZE },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image file (jpg, jpeg, png)"));
    }
    cb(undefined, true);
  },
});

module.exports = upload;
