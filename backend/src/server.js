const express = require("express");
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
// ///////////////////////////////////
app.use("/api/products-to-avoid", productsToAvoidRoute);
app.use("/api/businesses", businessRoute);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
