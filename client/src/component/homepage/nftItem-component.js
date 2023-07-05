import React from "react";
import { Link } from "react-router-dom";

const NFTItem = ({ nft, index }) => {
  console.log(nft);
  const floorPriceHandler = function (nft) {
    let allLastSalePrice = [];
    for (let i = 0; i < nft.childItems.length; i++) {
      allLastSalePrice.push(nft.childItems[i].lastSalePrice);
    }
    let floorPrice = allLastSalePrice[0];
    for (let i = 0; i < allLastSalePrice.length; i++) {
      if (allLastSalePrice[i] < floorPrice) {
        floorPrice = allLastSalePrice[i];
      } else {
        continue;
      }
    }
    console.log(floorPrice);
    return floorPrice;
  };

  const ceilingHandler = function (nft) {
    let ceiling = 0;
    for (let i = 0; i < nft.childItems.length; i++) {
      if (nft.childItems[i].lastSalePrice > ceiling) {
        ceiling = nft.childItems[i].lastSalePrice;
      } else {
        continue;
      }
    }
    return ceiling;
  };

  return (
    <Link className="itemLink" to={`/collection/${nft._id}`}>
      <div className="item">
        <div className="section1">
          <span className="index">{index + 1}</span>
          <div className="profilePicture">
            <img className="profilePicture" src={nft.profilePicture} alt="" />
          </div>
          <div className="titleDiv">
            <span className="title">{nft.title} </span>
            <span className="material-icons">verified</span>
          </div>
        </div>
        <div className="section2">
          <span className="floorPrice">{floorPriceHandler(nft)} ETH</span>
        </div>
        <div className="section3">
          <span className="ceiling">{ceilingHandler(nft)} ETH</span>
        </div>
      </div>
    </Link>
  );
};

export default NFTItem;
