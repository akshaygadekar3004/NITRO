/// <reference types="cypress" />
import { ethers } from "ethers";

const jsonObject = require("../../support/addrs/addr");

describe(`validate transactions`, () => {
  const jsonObjs = jsonObject;
  for (let i = 0; i < jsonObjs.length; i++) {
    it(`validate Transaction ${i + 1}`, () => {
      expect(true).eql(true);
      cy.log(jsonObjs[i]);
      //   cy.readFile(`cypress/support/addrs/addr.json`).then((fileData) => {
      cy.log(JSON.stringify(typeof fileData));
      //   for (let i = 0; i < fileData.length; i++) {
      // it(`validate transactions ${i + 1}`, () => {
      cy.visit(jsonObjs[i]);
      cy.scrollTo("0%", "100%");
      cy.xpath(
        `(//img[@alt='Chain Logo'])[2]/parent::div/following-sibling::span`
      )
        .invoke("text")
        .then((text) => {
          // cy.log("Text:", text);
          cy.readFile(`cypress/support/resources/resources.json`).then(
            (resources) => {
              // const provider = resources.text
              // cy.log(
              //   `========================`,
              //   JSON.stringify(resources[`${text.trim()}`]),
              //   JSON.stringify(text.trim()),
              //   JSON.stringify(resources)
              // );
              const providerUrl = resources[`${text.trim()}`];
              let txHash, sourceValue, sourceAddress;
              cy.xpath(
                `//h3[normalize-space()='Source Tx Hash']/following-sibling::div/a`
              )
                .invoke("attr", "href")
                .then((href) => {
                  const url = new URL(href);
                  const text = url.pathname.split("/").pop();
                  txHash = text.trim();
                });
              cy.xpath(
                `(//h3[normalize-space()='Source Token'])/following-sibling::div/span[1]`
              )
                .invoke(`text`)
                .then((text) => {
                  // cy.log(
                  //   `0-0-0-0-0-0-0-0-00-0-00-0-`,
                  //   text.split(" ")[0].trim()
                  // );
                  sourceValue = text.split(" ")[0].trim();
                });
              cy.then(() => {
                cy.fetchTransactionDetails(providerUrl, txHash).then(
                  (transaction) => {
                    cy.log("Transaction Details:", JSON.stringify(transaction));
                    // Add assertions to verify transaction details
                    expect(transaction).to.have.property("hash", txHash);
                    expect(transaction).to.have.property("from");
                    expect(transaction).to.have.property("to");
                    expect(transaction).to.have.property("value");
                    const etherSourceValue = ethers.utils.formatEther(
                      transaction.value
                    );
                    const minLength = Math.min(
                      sourceValue.length,
                      etherSourceValue.length
                    );
                    expect(sourceValue.substring(0, minLength)).eql(
                      etherSourceValue.substring(0, minLength)
                    );
                    expect(transaction).to.have.property("gasPrice");
                    expect(transaction).to.have.property("nonce");
                    // Log transaction details
                    cy.log(`From: ${transaction.from}`);
                    cy.log(`To: ${transaction.to}`);
                    cy.log(
                      `Value: ${ethers.utils.formatEther(
                        transaction.value
                      )} ETH`
                    );
                    cy.log(
                      `Gas Price: ${ethers.utils.formatUnits(
                        transaction.gasPrice,
                        "gwei"
                      )} Gwei`
                    );
                    cy.log(`Nonce: ${transaction.nonce}`);
                  }
                );
              });
            }
          );
        });
      // });
      //================ Verify Destination Transaction=============================
      let transactionStatus;
      cy.xpath(
        `//h1[normalize-space()='Destination Transaction']/following-sibling::div[1]`
      )
        .invoke(`text`)
        .then((text) => {
          transactionStatus = text.trim();
        });
      cy.then(() => {
        if (transactionStatus == `Completed`) {
          cy.xpath(
            `(//img[@alt='Chain Logo'])[4]/parent::div/following-sibling::span`
          )
            .invoke("text")
            .then((text) => {
              // cy.log("Text:", text);
              cy.readFile(`cypress/support/resources/resources.json`).then(
                (resources) => {
                  // const provider = resources.text
                  // cy.log(
                  //   `========================`,
                  //   JSON.stringify(resources[`${text.trim()}`]),
                  //   JSON.stringify(text.trim()),
                  //   JSON.stringify(resources)
                  // );
                  const providerUrl = resources[`${text.trim()}`];
                  let txHash, sourceValue, sourceAddress;
                  cy.xpath(
                    `//h3[normalize-space()='Destination Tx Hash']/following-sibling::div/a`
                  )
                    .invoke("attr", "href")
                    .then((href) => {
                      const url = new URL(href);
                      const text = url.pathname.split("/").pop();
                      txHash = text.trim();
                    });
                  cy.xpath(
                    `(//h3[normalize-space()='Destination Token'])/following-sibling::div/span[1]/span[1]`
                  )
                    .invoke(`text`)
                    .then((text) => {
                      // cy.log(
                      //   `0-0-0-0-0-0-0-0-00-0-00-0-`,
                      //   text.split(" ")[0].trim()
                      // );
                      sourceValue = text.trim();
                    });
                  cy.then(() => {
                    cy.fetchTransactionDetails(providerUrl, txHash).then(
                      (transaction) => {
                        cy.log(
                          "Transaction Details:",
                          JSON.stringify(transaction)
                        );
                        // Add assertions to verify transaction details
                        expect(transaction).to.have.property("hash", txHash);
                        expect(transaction).to.have.property("from");
                        expect(transaction).to.have.property("to");
                        expect(transaction).to.have.property("value");
                        const etherSourceValue = ethers.utils.formatEther(
                          transaction.value
                        );
                        const minLength = Math.min(
                          sourceValue.length,
                          etherSourceValue.length
                        );
                        expect(sourceValue.substring(0, minLength)).eql(
                          etherSourceValue.substring(0, minLength)
                        );
                        expect(transaction).to.have.property("gasPrice");
                        expect(transaction).to.have.property("nonce");
                        // Log transaction details
                        cy.log(`From: ${transaction.from}`);
                        cy.log(`To: ${transaction.to}`);
                        cy.log(
                          `Value: ${ethers.utils.formatEther(
                            transaction.value
                          )} ETH`
                        );
                        cy.log(
                          `Gas Price: ${ethers.utils.formatUnits(
                            transaction.gasPrice,
                            "gwei"
                          )} Gwei`
                        );
                        cy.log(`Nonce: ${transaction.nonce}`);
                      }
                    );
                  });
                }
              );
            });
        }
      });
      //   }
      //   });
    });
  }
});
