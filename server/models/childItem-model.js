const mongoose = require("mongoose");

const childItemSchema = new mongoose.Schema({
  profilePicture: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  lastSalePrice: {
    type: Number,
  },

  rarityLevel: {
    type: Number,
    required: true,
  },

  isListed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ChildItem", childItemSchema);
