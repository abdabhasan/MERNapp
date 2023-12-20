const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's actual URL
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
//
const databaseUrl = "mongodb://localhost:27017/muslim-local";

mongodb: mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// connection error handling
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});

const BusinessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  ownerFirstName: {
    type: String,
    required: true,
  },
  ownerLastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  businessType: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    default: null,
  },
  subscribe: {
    type: Boolean,
    default: false,
  },
});

const Model = mongoose.model("Business", BusinessSchema);

app.post("/add-business", (req, res) => {
  const formData = req.body;

  const newFormData = new Model(formData);

  newFormData
    .save()
    .then(() => {
      res.status(200).send("Form data saved successfully");
    })
    .catch((err) => {
      console.error("Error saving to database:", err);
      res.status(500).send("Error saving to database");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
