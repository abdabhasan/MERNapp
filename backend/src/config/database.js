const mongoose = require("mongoose");

const databaseUrl =
  process.env.MONGODB_URI || "mongodb://localhost:27017/muslimLocalDB";

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});
