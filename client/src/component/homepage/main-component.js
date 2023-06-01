import React, { useState, useEffect } from "react";
import NFTItem from "./nftItem-component";
import Card from "./card-component";

const MainComponent = (props) => {
  let { nftData, setNftData, collectionData, setCollectionData } = props;
  return (
    <div className="mainList">
      <div className="button">
        {" "}
        <div className="leftButton">
          <button className="trending">Trending</button>
          <button className="top">Top</button>
        </div>
        <div className="rightButton">
          <div className="sort">
            <span>Price Low to High</span>
            {/* <button className="material-icons">swap_vert</button> */}
          </div>
          <div className="chains">
            <p>Arbitrum</p>
            {/* <option value="Arbitrum">Arbitrum</option>
            <option value="Avalanche">Avalanche</option>
            <option value="BNB Chain">BNB Chain</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Klaytn">Klaytn</option>
            <option value="Optimism">Optimism</option>
            <option value="Poligon">Poligon</option>
            <option value="Solana">Solana</option> */}
          </div>
          <button className="viewAll">View All</button>
        </div>
      </div>
      <section className="allList">
        <div className="leftList">
          <div className="title">
            <div className="section1">
              <span className="collection">COLLECTION</span>
            </div>
            <div className="section2">
              <span className="flooorPrice">FLOOR PRICE</span>
            </div>
            <div className="section3">
              <span className="ceiling">CEILING</span>
            </div>
          </div>
          {nftData &&
            nftData
              .slice(0, 5)
              .map((nft, index) => (
                <NFTItem
                  nft={nft}
                  collectionData={collectionData}
                  setCollectionData={setCollectionData}
                  index={index}
                />
              ))}
        </div>
        <div className="rightList">
          <div className="title">
            <div className="section1">
              <span className="collection">COLLECTION</span>
            </div>
            <div className="section2">
              <span className="flooorPrice">FLOOR PRICE</span>
            </div>
            <div className="section3">
              <span className="ceiling">CEILING</span>
            </div>
          </div>
          {nftData &&
            nftData
              .slice(5)
              .map((nft, index) => (
                <NFTItem
                  nft={nft}
                  collectionData={collectionData}
                  setCollectionData={setCollectionData}
                  index={index + 5}
                />
              ))}
        </div>
      </section>
      <section className="allCard">
        <span className="allCardTitle notable">Notable Collections</span>
        <div className="fiveCard">
          {nftData &&
            nftData
              .slice(5)
              .map((nft) => (
                <Card
                  nft={nft}
                  collectionData={collectionData}
                  setCollectionData={setCollectionData}
                />
              ))}
        </div>
        <span className="allCardTitle topCollector">
          {" "}
          Top Collector Buys Today
        </span>
        <div className="fiveCard">
          {nftData &&
            nftData
              .slice(0, 5)
              .map((nft) => (
                <Card
                  nft={nft}
                  collectionData={collectionData}
                  setCollectionData={setCollectionData}
                />
              ))}
        </div>
      </section>
    </div>
  );
};

export default MainComponent;
