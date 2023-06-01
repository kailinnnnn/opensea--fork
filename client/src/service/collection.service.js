import axios from "axios";
const API_URL = "https://opensea-server.onrender.com";

class CollectionService {
  NftData() {
    const nftdata = axios.get(API_URL + "/");
    console.log(nftdata);
    return nftdata.then((response) => response.data);
  }

  CollectionData(id) {
    const collectiondata = axios.get(API_URL + "/collection/" + id);
    console.log(collectiondata);
    return collectiondata.then((response) => response.data);
  }
}

export default new CollectionService();
