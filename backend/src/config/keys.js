module.exports = {
  mongoURI: process.env.MONGO_URI || "your_default_mongodb_connection_string",
  jwtSecret: process.env.JWT_SECRET || "your_default_secret_key",
};
