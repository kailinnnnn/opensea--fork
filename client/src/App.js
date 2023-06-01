import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [collectionData, setCollectionData] = useState(null);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              collectionData={collectionData}
              setCollectionData={setCollectionData}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/collection/:id"
          element={
            <Collection
              collectionData={collectionData}
              setCollectionData={setCollectionData}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
