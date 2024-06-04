const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      saveJson: true,
      charts: true,
      reportPageTitle: "api-automation",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reporterDir: "cypress/reports",
      reportTitle: "test results",
    },
    pageLoadTimeout: 130000,
    viewportHeight: 720,
    viewportWidth: 1280,
  },
});
