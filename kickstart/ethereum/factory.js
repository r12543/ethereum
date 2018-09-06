import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x523E03003AB241b8b8cC342401387998db2FeC39"
);

export default instance;
