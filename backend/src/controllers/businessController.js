const BusinessModel = require("../models/businessModel");

exports.getBusinesses = (req, res) => {
  BusinessModel.find()
    .then((businesses) => {
      res.status(200).json(businesses);
    })
    .catch((err) => {
      console.error("Error fetching data from database:", err);
      res.status(500).send("Error fetching data from database");
    });
};

exports.addBusiness = (req, res) => {
  const formData = req.body;

  if (req.file) {
    // If there's an image, add its path to formData
    // or buffer, if using memory storage
    formData.image = req.file.path;
  }

  const newFormData = new BusinessModel(formData);

  newFormData
    .save()
    .then(() => {
      res.status(200).send("Form data saved successfully");
    })
    .catch((err) => {
      console.error("Error saving to database:", err);
      res.status(500).send("Error saving to database");
    });
};
