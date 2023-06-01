const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
  coverPhoto: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  owner: {
    type: String,
    required: true,
  },

  createDate: {
    type: Date,
    default: Date.now,
  },
  earnings: {
    type: Number,
    required: true,
  },

  chain: {
    type: String,
    default: "Ethereum",
  },

  category: {
    type: String,
    enum: ["PFP", "Art", "Virtual Worlds"],
    default: "PFP",
  },

  description: {
    type: String,
    required: true,
  },
  nftOwner: {
    type: Number,
  },
  uniqNFTOwner: {
    type: Number,
  },

  childItems: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ChildItem" }],
    default: [],
  },
});

module.exports = mongoose.model("NFT", nftSchema);
