const multer = require("multer");
// This will save files to 'uploads/' folder
const upload = multer({ dest: "uploads/" });
module.exports = upload;
