// const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =
  "win destroy bundle useful squirrel clerk alarm group genuine timber outdoor dry";
// module.exports = {
//   networks: {
//     binance: {
//       provider: () =>
//         new HDWalletProvider(
//           mnemonic,
//           `https://data-seed-prebsc-1-s1.binance.org:8545`,
//           0,
//           5
//         ),
//       network_id: 97,
//       confirmations: 10,
//       timeoutBlocks: 200,
//       skipDryRun: true,
//     },
//   },
// };

/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const HDWalletProvider = require("@truffle/hdwallet-provider");
// const fs = require("fs");
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  plugins: ["truffle-plugin-debugger"],
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
      //from: "0x327A78135507210FA0BC1F60798360C1349AA20D", // Defaults to first address from Ganache
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    binance: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://speedy-nodes-nyc.moralis.io/d6d6b19072a7b5e9494375e1/bsc/testnet`,
          0,
          5
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/0e7d179ed7a34dd4b8b0e20aabf1e62a`
        ),
      network_id: 3,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
