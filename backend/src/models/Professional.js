const mongoose = require("mongoose");

const ProfessionalSchema = new mongoose.Schema({
  profession: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  yearsInProfession: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
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

const ProfessionalModel = mongoose.model("professional", ProfessionalSchema);

module.exports = ProfessionalModel;
