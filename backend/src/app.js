const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("./config/database");
const passport = require("passport");

// MODELS
const BusinessModel = require("./models/businessModel");

// ROUTES
const userRoute = require("./routes/userRoute");
const productsToAvoidRoute = require("./routes/productsToAvoidRoute");
const businessRoute = require("./routes/businessRoute");
const placesRoute = require("./routes/placesRoute");
// MIDLEWARES
const errorHandler = require("./middlewares/errorHandler");

///////////////////////////////////////////////////
const app = express();

// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// COOKIES
app.use(cookieParser());

// ROUTES
app.use("/api/users", userRoute);
app.use("/api/products-to-avoid", productsToAvoidRoute);
app.use("/api/businesses", businessRoute);
app.use("/api/places", placesRoute);

// Error handling middleware
app.use(errorHandler);

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// // The "catchall" handler for serving the React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
// });

module.exports = app;
