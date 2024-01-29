const mongoose = require("mongoose");

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
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lon: {
    type: Number,
  },
  image: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  instagram: {
    type: String,
    default: "",
  },
  facebook: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  otherLink: {
    type: String,
    default: "",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const BusinessModel = mongoose.model("Business", BusinessSchema);

module.exports = BusinessModel;
