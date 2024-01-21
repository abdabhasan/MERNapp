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
    name: {
      type: String,
    },
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },
  image: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  links: {
    website: {
      type: String,
      default: "",
    },
    socialMedia1: {
      type: String,
      default: "",
    },
    socialMedia2: {
      type: String,
      default: "",
    },
    socialMedia3: {
      type: String,
      default: "",
    },
    socialMedia4: {
      type: String,
      default: "",
    },
  },
});

const BusinessModel = mongoose.model("Business", BusinessSchema);

module.exports = BusinessModel;
