// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { ethers } from "ethers";

Cypress.Commands.add("fetchTransactionDetails", (providerUrl, txHash) => {
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  return provider.getTransaction(txHash).then((transaction) => {
    if (!transaction) {
      throw new Error("Transaction not found");
    }
    return transaction;
  });
});
