const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "note across curious punch scale toddler ceiling hip help opinion waste page",
  "https://rinkeby.infura.io/v3/87c1bbed232346dba2ff511193414008"
);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy contract from account:", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({
        data: "0x" + bytecode,
        arguments: ["Hi there!"]
      })
      .send({ from: accounts[0] });

    console.log(result.options.address);
  } catch (error) {
    console.log(error);
  }
};
deploy();
