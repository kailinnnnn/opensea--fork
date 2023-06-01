import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CollectionService from "../service/collection.service";
import WhiteHeaderComponent from "../component/collection/whiteheader-component";
import BannerComponent from "../component/collection/banner";
import CollectionMain from "../component/collection/collectionmain";
import "../styles/collection/style.css";

const Collection = (props) => {
  let { collectionData, setCollectionData, cartItems, setCartItems } = props;
  // 用戶資料的狀態
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CollectionService.CollectionData(id);
        console.log(data);
        setCollectionData(data); // 將用戶資料儲存到狀態中
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [collectionData]);

  return (
    <div>
      <WhiteHeaderComponent
        collectionData={collectionData}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {collectionData && <BannerComponent collectionData={collectionData} />}
      {collectionData && (
        <CollectionMain
          collectionData={collectionData}
          setCollectionData={setCollectionData}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </div>
  );
};

export default Collection;
