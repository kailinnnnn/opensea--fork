const router = require("express").Router();
const mongoose = require("mongoose");
const NFT = require("../models").nftModel;
const ChildItem = require("../models").childItemModel;

router.get("/", (req, res) => {
  NFT.find()
    .then((nftdata) => {
      res.send(nftdata);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/collection/:_id", (req, res) => {
  NFT.findById(req.params._id)
    .populate("childItems")
    .then((nftdata) => {
      res.send(nftdata);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
