const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const BusinessModel = require("./models/BusinessModel");
const productsToAvoidRoute = require("./routes/productsToAvoidRoute");
const errorHandler = require("./middlewares/errorHandler");
const databaseConfig = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's actual URL
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/v1/", productsToAvoidRoute);

app.post("/add-business", (req, res) => {
  const formData = req.body;
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
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
