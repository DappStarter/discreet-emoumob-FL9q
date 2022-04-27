require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain pumpkin hunt problem forward seven'; 
let testAccounts = [
"0xe07f1026abcd43c6b30d2b72ea7b87eea0f946c30c751a3e8c5febb1cebc277a",
"0x1b2b76eedc0eb073bff368dfe23620ae5beef8ad2a3c4097dad645b53e159e5a",
"0x8c35deacab519b55e8667e9b126573ec43dca2978906da8c5a65513de1c607c8",
"0xcd0edef70ec22bf3240b5403b3c04b1d08f12a55e92ac9fefd70e6db140625c3",
"0x8f8bd5e909dc770d3ea89e92263d1564a08a2acbf65637697ca0f56e506141cb",
"0x54964c98ab7652ab3dbcf9a61e8e0e59282986be0ca19ae96ff3b9cf3840ec30",
"0xb0f0e44459a9e822d548fd5b69eeedf08f014663bc491cd3272e223a26967f5a",
"0x62c35a1b97c01a0631858d5fed40d8f807de6c42fbb03f93dfe371e8209b83a3",
"0xbac28934029c30e5a61bcc83b789fea9b70344112b2d621e20ea77eeb025cd90",
"0x0c94752f64003dfa7a4d0fec4df0eead887f06d7bf77bc56878563f0b4ef2b4f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

