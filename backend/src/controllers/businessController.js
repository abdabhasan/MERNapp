const BusinessModel = require("../models/businessModel");
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
      return new Promise((resolve, reject) => {
        const { originalname, buffer } = file;
        const blob = bucket.file(originalname);
        const blobStream = blob.createWriteStream({
          resumable: false,
        });

        blobStream
          .on("finish", () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            resolve(publicUrl);
          })
          .on("error", (e) => {
            reject(e);
          })
          .end(buffer);
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
