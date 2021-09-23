require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind history idea kite bubble giant'; 
let testAccounts = [
"0xd51fb67d861ab2e2f7e03578d9be61de6992d88ac4b8c8973c37bdbbf99121a8",
"0xa4bbd66e21668f711aea8b8c4d48b2e53f1ef8c2eb9c25a120e31ad66faaa91c",
"0x6187da8662ce8b189e3243d35e7782b0c1a47691e8a446e6f407e96522ed949d",
"0xb17668f5ef92f198c41239e63fd093891db1495a92b6bedc509f2504ae1c624e",
"0x642cbb3a999248a7ebb7e9a52c1a7303249bc6e72b7b759767266e36e1fd762c",
"0xa2e354342934c7731cf0d92bd16a82e04da3aa65d893ad51886e26dbfb054a75",
"0xe4db7ef05e0b4cbe884d554c12ae17231a645d9717f8e7989ff94899a94a1daa",
"0x827692ba35741109c9a3688f9d8baab57cfa1e298226fb5752b96b922b7bbf1a",
"0xd68e094a968b674600f16585582ab26ed5859c96d67e25d2e313dcab78dd4223",
"0xef0d4b741597c183171e87a3ba99a9dc36231c65770ff859abc9fb4a498b0e3e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


