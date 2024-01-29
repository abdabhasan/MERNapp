const { v4: uuidv4 } = require("uuid");

const generateUniqueName = (req, res, next) => {
  if (req.file) {
    const originalName = req.file.originalname;
    const fileExtension = originalName.split(".").pop();
    req.file.uniqueName = `${uuidv4()}.${fileExtension}`;
  }
  next();
};

module.exports = generateUniqueName;
