/// <reference types="cypress" />
import { ethers } from "ethers";

let currentURL = `https://explorer.routernitro.com/transactions?`;
let addr = [];

describe(`Automate Nitro`, () => {
  beforeEach(`set before each test`, () => {
    cy.intercept(
      `POST`,
      `https://api.pro-nitro-explorer.routernitro.com/graphql`
    ).as(`pageContent`);
  });
  xit(`visit Nitro`, () => {
    cy.visit(
      `https://explorer.routernitro.com/transactions?page=1&fromChain=137%252C43114%252C1
        0&toChain=534352%252C8453%252C56`
      // `https://explorer.routernitro.com/transactions`
      //   { timeout: 130000, pageLoadTimeout : 130000 }
    );
    cy.wait(`@pageContent`, { timeout: 120000 });

    // /*

    // ===========================================================================================================
    cy.xpath(
      `/html/body/main/div[3]/section/div[2]/div[1]/div/button[2]`
    ).click();
    // cy.xpath(`//*[@id="radix-:r10:"]`);
    // cy.get(`radix-:r10:`).should(`have.text`, `Clear Filters`);
    cy.wait(500);
    cy.scrollTo("0%", "65%");
    cy.wait(500);
    // cy.get('#radix-\:r8\:');
    // cy.get('#radix-\:rc\:');

    // cy.xpath(`//button[normalize-space()='Clear Filters']`)
    //   .should("exist")
    //   .and("be.visible")
    //   //   .scrollIntoView()
    //   .should("not.be.disabled")
    //   .click({ force: true });

    cy.xpath(`//div[contains(@id, 'radix-')]/div/div[3]/div/button`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    cy.wait(500);
    cy.xpath(`//ul[contains(@id, 'headlessui-listbox-options-')]/div[1]/div`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    cy.wait(500);
    // cy.scrollTo("0", "-200");
    cy.wait(500);
    cy.xpath(`//ul[contains(@id, 'headlessui-listbox-options-')]/div[2]/button`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });

    // cy.wait(500);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(
      `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Avalanche']`
    )
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    // cy.wait(1000);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(
      `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Optimism']`
    )
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .parents(`li`)
      .find(`div`)
      .click({ force: true });
    // cy.wait(700);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(
      `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Polygon']`
    )
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    // cy.wait(700);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(`//div[contains(@id, 'radix-')]/div/div[3]/div/button`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    cy.wait(500);
    // cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(`//div[contains(@id, 'radix-')]/div/div[4]/div/button`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    cy.wait(500);
    cy.xpath(`//ul[contains(@id, 'headlessui-listbox-options-')]/div[1]/div`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    cy.scrollTo("0%", "80%");
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(`//ul[contains(@id, 'headlessui-listbox-options-')]/div[2]/button`)
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });

    // cy.wait(`@pageContent`, { timeout: 120000 });
    cy.wait(500);

    cy.xpath(
      `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Scroll']`
    )
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    // cy.wait(1000);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(
      `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Base']`
    )
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .parents(`li`)
      .find(`div`)
      .click({ force: true });
    // cy.wait(700);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(
      `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Bnb']`
    )
      .should("exist")
      .and("be.visible")
      //   .scrollIntoView()
      .should("not.be.disabled")
      .click({ force: true });
    // cy.wait(700);

    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.wait(500);
    cy.scrollTo("0%", "60%");
    cy.xpath(`//div[contains(@id, 'radix-')]/div/div[4]/div/button`)
      // .scrollIntoView()
      .should("exist")
      .and("be.visible")
      .should("not.be.disabled")
      .click({ force: true });

    cy.url().then((url) => {
      currentURL = url;
      cy.log(url, currentURL);
    });

    // cy.then(() => {
    //   cy.visit(currentURL);
    // });

    // ===========================================================================================================

    // */

    // cy.wait(`@pageContent`, { timeout: 120000 });
  });
  it(`pick transaction details`, () => {
    cy.visit(currentURL);
    cy.wait(`@pageContent`, { timeout: 120000 });
    cy.xpath(`//h1[@class='font-bold']`)
      .scrollIntoView({ block: "start" })
      .should("be.visible")
      .click({ force: true });
    cy.window().then((win) => {
      win.scrollBy(0, -110);
    });
    for (let i = 1; i <= 5; i++) {
      cy.xpath(`//tbody/a[${i}]`)
        .invoke(`attr`, `href`)
        .then((href) => {
          cy.log(href);
          // addr = href;
          addr.push(`https://explorer.routernitro.com` + href);
          // cy.visit(`https://explorer.routernitro.com/` + href);
        });
    }
    cy.writeFile(`cypress/support/addrs/addr.json`, addr);

    cy.readFile(`cypress/support/addrs/addr.json`).then((fileData) => {
      cy.log(JSON.stringify(typeof fileData));
      for (let i = 0; i < fileData.length; i++) {
        // it(`validate transactions ${i + 1}`, () => {
        cy.visit(fileData[i]);
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
                cy.log(
                  `========================`,
                  JSON.stringify(resources[`${text.trim()}`]),
                  JSON.stringify(text.trim()),
                  JSON.stringify(resources)
                );
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
                    cy.log(
                      `0-0-0-0-0-0-0-0-00-0-00-0-`,
                      text.split(" ")[0].trim()
                    );
                    sourceValue = text.split(" ")[0].trim();
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
        // });
      }
    });
  });

  // describe(``, () => {
  // });
});
