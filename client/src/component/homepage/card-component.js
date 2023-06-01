import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  let { nft } = props;
  const floorPriceDealer = function (nft) {
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
    return floorPrice;
  };

  const ceilingDealer = function (nft) {
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
    <Link className="cardlink" to={`/collection/${nft._id}#whiteheader`}>
      <div className="image">
        <img src={nft.coverPhoto} alt="" />
      </div>

      <div className="content">
        <div className="contentTop">
          <span className="title">{nft.title}</span>
          <span class="material-icons">verified</span>
        </div>
        <div className="contentBottom">
          <div className="left">
            <span className="floor">FLOOR</span>
            <span className="price">{floorPriceDealer(nft)} ETH</span>
          </div>
          <div className="right">
            <span className="ceiling">CEILING</span>
            <span className="price">{ceilingDealer(nft)} ETH</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
