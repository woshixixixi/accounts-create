const { ethers } = require("ethers");
const fs = require('fs'); // 引入Node.js内置的文件系统模块

const addresses = [];

async function generateAddresses(count) {

    let paths = './addresses.txt';
    let addressContent = '';
    for (let i = 0; i < count; i++) {
        let wallet = new ethers.Wallet.createRandom();
        let address = wallet.address;
        addresses.push(address);
        // console.log(`Address: ${address}`);
        addressContent += '\n';
        addressContent += ('"' + address + '",');
        fs.writeFileSync(paths, addressContent, 'utf-8')
    }
    console.log(addresses)
}

generateAddresses(5);