import React, { useState, useEffect } from "react";
import "../styles/homepage/style.css";
import CollectionService from "../service/collection.service";
import NavComponent from "../component/homepage/nav-component";
import SlideshowComponent from "../component/homepage/slider-component";
import HeaderComponent from "../component/homepage/header-component";
import MainComponent from "../component/homepage/main-component";
import FooterComponent from "../component/homepage/footer-component";

const Homepage = (props) => {
  const images = ["/media/peopleBG.jpeg", "/media/heart.avif"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [nftData, setNftData] = useState(null); // 用戶資料的狀態
  let { cartItems, setCartItems, collectionData } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const nftData = await CollectionService.NftData();
        console.log(nftData);
        setNftData(nftData); // 將用戶資料儲存到狀態中
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setBackgroundIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div
      className="backgroundImage"
      style={{
        backgroundImage: `url(${images[backgroundIndex]})`,
      }}
    >
      <div className="backgroundColor">
        <HeaderComponent
          cartItems={cartItems}
          setCartItems={setCartItems}
          collectionData={collectionData}
        />
        <NavComponent />
        <SlideshowComponent
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <MainComponent nftData={nftData} setNftData={setNftData} />
        <FooterComponent />
      </div>
    </div>
  );
};

export default Homepage;
