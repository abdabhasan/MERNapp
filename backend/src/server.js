const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const databaseConfig = require("./config/database");

// MODELS
const BusinessModel = require("./models/businessModel");

// ROUTES
const productsToAvoidRoute = require("./routes/productsToAvoidRoute");
const businessRoute = require("./routes/businessRoute");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// MIDLEWARES
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/v1/", productsToAvoidRoute);
app.use("/api/v1/", businessRoute);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
