import axios from "axios";
// const API_URL = "https://opensea-server.onrender.com";
const API_URL = "http://localhost:8080";

class CollectionService {
  NftData() {
    const nftdata = axios.get(API_URL + "/");
    console.log(nftdata);
    return nftdata
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  }

  CollectionData(id) {
    const collectiondata = axios.get(API_URL + "/collection/" + id);
    console.log(collectiondata);
    return collectiondata
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new CollectionService();
