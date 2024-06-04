import { ethers } from "ethers";

describe('Fetch Ethereum Transaction Details', () => {
  it('should fetch and display transaction details', () => {
    // const providerUrl = 'https://mainnet.infura.io/v3/a7b38e5a731040e1827656abd313ff90'; 
    // const providerUrl = 'https://optimism-mainnet.infura.io/v3/a7b38e5a731040e1827656abd313ff90'; 
    const providerUrl = 'https://bsc-dataseed.binance.org/'; 
    const txHash = '0x2dccf43ea993a87102897a8885448d77fa57a111791fa7fd84f31a1aeb185fad';

    cy.fetchTransactionDetails(providerUrl, txHash).then((transaction) => {
      cy.log('Transaction Details:', transaction);

      // Add assertions to verify transaction details
      expect(transaction).to.have.property('hash', txHash);
      expect(transaction).to.have.property('from');
      expect(transaction).to.have.property('to');
      expect(transaction).to.have.property('value');
      expect(transaction).to.have.property('gasPrice');
      expect(transaction).to.have.property('nonce');

      // Log transaction details
      cy.log(`From: ${transaction.from}`);
      cy.log(`To: ${transaction.to}`);
      cy.log(`Value: ${ethers.utils.formatEther(transaction.value)} ETH`);
      cy.log(`Gas Price: ${ethers.utils.formatUnits(transaction.gasPrice, 'gwei')} Gwei`);
      cy.log(`Nonce: ${transaction.nonce}`);
    });
  });
});
