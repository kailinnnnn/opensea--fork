import React from "react";

const footerComponent = () => {
  return (
    <footer>
      <div className="footerHeader">
        <div className="footerHeaderSection1">
          <div className="stay">
            <span>Stay in the loop</span>
          </div>

          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
          <div className="inputAndButton">
            <div className="input">
              <input
                type="text"
                placeholder="Your email address"
                name=""
                id=""
              />
            </div>
            <button>Sign up</button>
          </div>
        </div>

        <div className="community">
          <div className="join">
            <span>Join the community</span>
          </div>

          <div className="icon">
            <div className="twitter">
              {" "}
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="instagram">
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="discord">
              {" "}
              <i className="fa-brands fa-discord"></i>
            </div>
            <div className="reddit">
              {" "}
              <i className="fa-brands fa-reddit-alien"></i>
            </div>
            <div className="youtube">
              {" "}
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="tiktok">
              {" "}
              <i className="fa-brands fa-tiktok"></i>
            </div>
            <div className="envelope">
              {" "}
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="introduceAndLink">
        <div className="introduce">
          <img src="../media/whitelogo.png" alt="" />
          <a href="">OpenSea</a>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>

        <div className="footerLink">
          <div className="link marketPlace">
            <h3>Marketplace</h3>
            <ul>
              <li>
                <a href="">all NFTs</a>
              </li>
              <li>
                <a href="">Art</a>
              </li>

              <li>
                <a href="">Gaming</a>
              </li>

              <li>
                <a href="">Memberships</a>
              </li>

              <li>
                <a href="">PFPs</a>
              </li>

              <li>
                <a href="">Photography</a>
              </li>
            </ul>
          </div>
          <div className="link accountAndstats">
            <h3>My Account</h3>
            <ul>
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Favorites</a>
              </li>

              <li>
                <a href="">Watchlist</a>
              </li>
              <li>
                <a href="">My Collections</a>
              </li>
              <li>
                <a href="">Create</a>
              </li>
              <li>
                <a href="">OpenSea Pro</a>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
            </ul>
            <br />
            <br />

            <h3>Stats</h3>
            <ul>
              <li>
                <a href="">Rankings</a>
              </li>
              <li>
                <a href="">Activity</a>
              </li>
            </ul>
          </div>

          <div className="link resources">
            <h3>Resources</h3>
            <ul>
              {" "}
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Learn</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">User Content FAQs</a>
              </li>
              <li>
                <a href="">Taxes</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
              <li>
                <a href="">Developer Platform</a>
              </li>
              <li>
                <a href="">Platform Status</a>
              </li>
            </ul>
          </div>
          <div className="link compompanyAndLearn">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Ventures</a>
              </li>
              <li>
                <a href="">Grants</a>
              </li>
            </ul>
            <br />
            <br />

            <h3>Learn</h3>
            <ul>
              <li>
                <a href="">What is an NFT?</a>
              </li>
              <li>
                <a href="">How to buy an NFT</a>
              </li>
              <li>
                <a href="">What are NFT drops?</a>
              </li>
              <li>
                <a href="">How to sell an NFT using OpenSea</a>
              </li>
              <li>
                <a href="">How to create an NFT on OpenSea</a>
              </li>
              <li>
                <a href="">What is a crypto wallet?</a>
              </li>
              <li>
                <a href="">What is cryptocurrency?</a>
              </li>
              <li>
                <a href="">What are blockchain gas fees?</a>
              </li>
              <li>
                <a href="">What is a blockchain?</a>
              </li>
              <li>
                <a href="">What is web3?</a>
              </li>
              <li>
                <a href="">How to stay protected in web3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>© 2018 - 2023 Ozone Networks, Inc</p>
        <div className="bottomLink">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default footerComponent;
