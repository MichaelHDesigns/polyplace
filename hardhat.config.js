const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

//const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      url: 'https://rpc0.altcoinchain.org/rpc',
//      chainId: 2330,
    },
 //   matic: {
 //     url: 'https://rpc-mumbai.maticvigil.com',
 //     accounts: [privateKey],
 //   },
  },
  solidity: '0.8.4',
};
