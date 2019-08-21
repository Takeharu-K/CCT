const HDWalletProvider = require('truffle-hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const apiKey = fs.readFileSync(".apikey").toString().trim();
``
module.exports = {

	networks: {

		development: {
			host: "127.0.0.1",     // Localhost (default: none)
			port: 8545,            // Standard Ethereum port (default: none)
			network_id: "*",       // Any network (default: none)
		},

		rinkeby: {
			provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + apiKey),
			network_id: 4,
			gas: 5500000,        
			confirmations: 2,    
			timeoutBlocks: 200,  
			skipDryRun: true     
		},

		mainnet: {
			provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/" + apiKey),
			network_id: 1,
			gas: 5500000,        
			confirmations: 2,    
			timeoutBlocks: 200,  
			skipDryRun: true     
		}
	},

	compilers: {
		solc: {
			version: "0.5.1",
			settings: {
				optimizer: {
				  enabled: true,
				  runs: 200   // Optimize for how many times you intend to run the code
				}
			}
		}
	}
}
