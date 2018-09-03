const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "note across curious punch scale toddler ceiling hip help opinion waste page",
  "https://rinkeby.infura.io/v3/87c1bbed232346dba2ff511193414008"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy contract from account:", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: "0x" + compiledFactory.bytecode
    })
    .send({ from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
