/// <reference types="cypress" />
import { ethers } from "ethers";

let currentURL = `https://explorer.routernitro.com/transactions`;

describe(`Automate Nitro`, () => {
  beforeEach(`set before each test`, () => {
    cy.intercept(
      `POST`,
      `https://api.pro-nitro-explorer.routernitro.com/graphql`
    ).as(`pageContent`);
  });
  it(`visit Nitro`, () => {
    cy.visit(
      // `https://explorer.routernitro.com/transactions?page=1&fromChain=137%252C43114%252C1
      //   0&toChain=534352%252C8453%252C56`
      currentURL
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
    // cy.xpath(
    //   `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Avalanche']`
    // )
    //   .should("exist")
    //   .and("be.visible")
    //   //   .scrollIntoView()
    //   .should("not.be.disabled")
    //   .click({ force: true });
    // // cy.wait(1000);
    // cy.wait(`@pageContent`, { timeout: 120000 });
    // cy.xpath(
    //   `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Optimism']`
    // )
    //   .should("exist")
    //   .and("be.visible")
    //   //   .scrollIntoView()
    //   .should("not.be.disabled")
    //   .parents(`li`)
    //   .find(`div`)
    //   .click({ force: true });
    // // cy.wait(700);
    // cy.wait(`@pageContent`, { timeout: 120000 });
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
    // cy.wait(`@pageContent`, { timeout: 120000 });
    // cy.xpath(
    //   `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Base']`
    // )
    //   .should("exist")
    //   .and("be.visible")
    //   //   .scrollIntoView()
    //   .should("not.be.disabled")
    //   .parents(`li`)
    //   .find(`div`)
    //   .click({ force: true });
    // // cy.wait(700);
    // cy.wait(`@pageContent`, { timeout: 120000 });
    // cy.xpath(
    //   `//ul[contains(@id, 'headlessui-listbox-options-')]/li/span[text() = ' Bnb']`
    // )
    //   .should("exist")
    //   .and("be.visible")
    //   //   .scrollIntoView()
    //   .should("not.be.disabled")
    //   .click({ force: true });
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
    cy.wait(`@pageContent`, { timeout: 120000, force: true }).then(() => {
      cy.xpath(`//h1[@class='font-bold']`)
        .scrollIntoView({ block: "start" })
        .should("be.visible")
        .click({ force: true });
      cy.window().then((win) => {
        win.scrollBy(0, -110);
      });
      let addr = [];

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
      cy.then(() => {
        cy.writeFile(
          `cypress/support/addrs/addr.js`,
          `module.exports = ${JSON.stringify(addr)}`
        );
      });
    });
  });
});
