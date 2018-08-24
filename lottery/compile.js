const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

const compiledCode = solc.compile(source, 1);

module.exports = compiledCode.contracts[":Lottery"];
