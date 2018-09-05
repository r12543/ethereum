import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x847Af31c9B9246d779C196cc2505cF2b2480afcE"
);

export default instance;
