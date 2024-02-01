import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'tsconfig-paths/register'
import 'hardhat-contract-signatures'

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.18',
		settings: {
			optimizer: {
				enabled: true,
				runs: 100,
			},
		},
	},
	mocha: {
		timeout: 1000000,
	},
	typechain: {
		outDir: './typechain',
	},
	contractSignature: {
		functionsColumns: ['selector', 'sign:minimal'],
		eventsColumns: ['sign:minimal'],
		errorsColumns: ['sign:minimal'],
	},
}

export default config
