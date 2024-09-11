// scripts/deploy.js
const main = async () => {
     // Get 'OnChainNFT' contract
     const nftContractFactory = await hre.ethers.getContractFactory('ChainNFT');
  
     // Deploy contract
     const nftContract = await nftContractFactory.deploy();
     await nftContract.deployed;
     console.log('✅ Contract deployed to:', nftContract.target);
 
   
     // SVG image that you want to mint
     const svg = `<svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z" fill="#000000"/>
    </svg>`;
   
     // Call the mint function from our contract
    const txn = await nftContract.mint(svg);
    const txnReceipt = await txn.wait();
  
    // Get the token id of the minted NFT (using our event)
    const event = txnReceipt.events?.find((event) => event.event === 'Minted');
    const tokenId = event?.args['tokenId'];
  
    console.log(
      '🎨 Your minted NFT:',
      `https://testnets.opensea.io/assets/${nftContract.target}/${tokenId}`
    );
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
   