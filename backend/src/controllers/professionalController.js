const Professional = require("../models/Professional");
const { Storage } = require("@google-cloud/storage");
const bucketName = "professionals-images";
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

// exports.getProfessionals = (req, res) => {
//   BusinessModel.find()
//     .then((businesses) => {
//       res.status(200).json(businesses);
//     })
//     .catch((err) => {
//       console.error("Error fetching data from database:", err);
//       res.status(500).send("Error fetching data from database");
//     });
// };

// exports.getProfessionalById = (req, res) => {
//   const businessId = req.params.id;

//   BusinessModel.findById(businessId)
//     .then((business) => {
//       if (business) {
//         res.status(200).json(business);
//       } else {
//         res.status(404).send("Business not found");
//       }
//     })
//     .catch((err) => {
//       console.error("Error fetching data from database:", err);
//       res.status(500).send("Error fetching data from database");
//     });
// };

exports.addProfessional = async (req, res) => {
  try {
    const formData = req.body;
    let imageUrl = "";

    if (req.file) {
      // Initialize Google Cloud Storage
      const storage = new Storage();
      const bucket = storage.bucket(bucketName);

      const { uniqueName, buffer } = req.file;
      const blob = bucket.file(uniqueName);
      const blobStream = blob.createWriteStream({
        resumable: false,
      });

      await new Promise((resolve, reject) => {
        blobStream
          .on("finish", () => {
            imageUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            resolve();
          })
          .on("error", (e) => {
            reject(e);
          })
          .end(buffer);
      });
    }

    formData.image = imageUrl;

    // Extract user ID from the token
    const token = req.cookies.user;
    console.log("token", token);
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }

    let decoded;
    try {
      decoded = jwt.verify(token, jwtSecret);
    } catch (err) {
      return res.status(401).send("Unauthorized: Invalid token");
    }

    // Add the user ID to formData
    formData.user = decoded.user.id;

    //  save the formData to MongoDB
    const newProfessional = new Professional(formData);
    await newProfessional.save();

    res.status(200).send("Professional added successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error saving professional");
  }
};
