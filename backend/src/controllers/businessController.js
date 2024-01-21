const BusinessModel = require("../models/businessModel");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Temporary storage
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});
const bucket = storage.bucket("businesses-images");

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

exports.getBusinessById = (req, res) => {
  const businessId = req.params.id;

  BusinessModel.findById(businessId)
    .then((business) => {
      if (business) {
        res.status(200).json(business);
      } else {
        res.status(404).send("Business not found");
      }
    })
    .catch((err) => {
      console.error("Error fetching data from database:", err);
      res.status(500).send("Error fetching data from database");
    });
};

exports.addBusiness = async (req, res) => {
  const formData = req.body;

  try {
    let imageUrl = "";

    if (req.file) {
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();

      await new Promise((resolve, reject) => {
        blobStream.on("error", (err) => reject(err));
        blobStream.on("finish", () => {
          imageUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          resolve();
        });
        blobStream.end(req.file.buffer);
      });
    }

    formData.image = imageUrl;
    const newBusiness = new BusinessModel(formData);

    await newBusiness.save();
    res.status(200).send("Business added successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error saving business");
  }
};
