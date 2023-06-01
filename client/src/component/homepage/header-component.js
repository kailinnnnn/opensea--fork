import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../collection/cart";

const HeaderComponent = (props) => {
  //處理header下拉選單
  let { collectionData, cartItems, setCartItems } = props;
  const [dropsOpen, setDropsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  let [cartOpen, setCartOpen] = useState(false);

  function handleCartOpen() {
    setCartOpen(true);
  }

  function handleDropsOpen() {
    setDropsOpen(true);
  }
  function handleDropsClose() {
    setDropsOpen(false);
  }

  function handleStatsOpen() {
    setStatsOpen(true);
  }
  function handleStatsClose() {
    setStatsOpen(false);
  }

  //處理header滾動變色
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? "scrolled" : "";

  return (
    <header className={headerClass}>
      <div className="block1">
        <Link className="logo" to="/">
          <img
            src={isScrolled ? "../media/logoblack.png" : "../media/logo.png"}
            alt="logo"
          />
        </Link>

        <div
          className={`separator ${isScrolled ? "scrolledseparator" : ""}`}
        ></div>
        <ul>
          <li onMouseOver={handleDropsOpen}>
            <Link className={isScrolled ? "scrolledlink" : ""} to="#">
              Drops
            </Link>
            {dropsOpen && (
              <div
                className="dropdown-menu__content"
                onMouseOver={handleDropsOpen}
                onMouseOut={handleDropsClose}
              >
                <ul>
                  <li>
                    <a href="#">Featured</a>
                  </li>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li onMouseOver={handleStatsOpen} onMouseLeave={handleDropsClose}>
            <Link className={isScrolled ? "scrolledlink" : ""} to="#">
              Stats
            </Link>
            {statsOpen && (
              <div
                className="dropdown-menu__content"
                onMouseOver={handleStatsOpen}
                onMouseLeave={handleStatsClose}
              >
                <ul>
                  <li>
                    <a href="#">Rankings</a>
                  </li>
                  <li>
                    <a href="#">Activity</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className={`search ${isScrolled ? "scrolleddiv" : ""}`}>
        <button
          className={`material-icons ${isScrolled ? "scrolledbutton" : ""}`}
        >
          search
        </button>
        <input
          className={isScrolled ? "scrolledholder" : ""}
          type="text"
          placeholder="Search items, collections, and accounts"
          required
        />
        <button className={`slash ${isScrolled ? "scrolledslash" : ""}`}>
          /
        </button>
      </div>
      <div className={`walletandaccount ${isScrolled ? "scrolleddiv" : ""}`}>
        <div className="wallet">
          <button
            className={`material-icons ${isScrolled ? "scrolledbutton" : ""}`}
          >
            wallet
          </button>
          <span className={isScrolled ? "scrolledspan" : ""}>
            {" "}
            Connect Wallet
          </span>
        </div>
        <div className={`account ${isScrolled ? "scrolleddiv" : ""}`}>
          <button
            className={`material-icons ${isScrolled ? "scrolledbutton" : ""}`}
          >
            account_circle
          </button>
        </div>
      </div>
      <div
        className={`cart ${isScrolled ? "scrolleddiv" : ""}`}
        onClick={handleCartOpen}
      >
        {cartItems.length > 0 && (
          <div className="number">
            <span>{cartItems.length}</span>{" "}
          </div>
        )}

        <button
          className={`material-icons ${isScrolled ? "scrolledbutton" : ""}`}
        >
          shopping_cart
        </button>
      </div>
      {cartOpen && (
        <Cart
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          setCartItems={setCartItems}
          cartItems={cartItems}
          collectionData={collectionData}
        />
      )}
    </header>
  );
};

export default HeaderComponent;
