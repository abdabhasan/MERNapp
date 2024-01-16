require("dotenv").config();
const mongoose = require("mongoose");
const Joi = require("joi");

// Environment variables validation
const envSchema = Joi.object({
  MONGODB_URI: Joi.string().required(),
  DB_CONNECTION_RETRIES: Joi.number().integer().min(1).default(5),
  DB_RETRY_DELAY: Joi.number().integer().min(1000).default(5000),
}).unknown();

const { value: envVars, error } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Configuration
const databaseUrl = envVars.MONGODB_URI;
const maxRetries = envVars.DB_CONNECTION_RETRIES;
const retryDelay = envVars.DB_RETRY_DELAY;

// Mongoose Promise
mongoose.Promise = global.Promise;

const connectToDatabase = async (attempt = 1) => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB at ${databaseUrl}`);
  } catch (err) {
    console.error(`MongoDB connection error (Attempt ${attempt}):`, err);
    if (attempt < maxRetries) {
      console.log(`Retrying to connect in ${retryDelay / 1000} seconds...`);
      setTimeout(() => connectToDatabase(attempt + 1), retryDelay);
    } else {
      console.error("Failed to connect to MongoDB after maximum retries.");
    }
  }
};

// Connection Event Listeners
mongoose.connection.on("connected", () => {
  console.log("MongoDB reconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

mongoose.connection.on("disconnecting", () => {
  console.log("MongoDB is disconnecting...");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected");
});

mongoose.connection.on("reconnectFailed", () => {
  console.error("MongoDB reconnection failed");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
  } catch (err) {
    console.error("Error closing MongoDB connection:", err);
    process.exit(1);
  }
});

connectToDatabase();

module.exports = connectToDatabase;
