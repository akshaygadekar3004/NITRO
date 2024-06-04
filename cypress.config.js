const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 130000,
    viewportHeight: 720,
    viewportWidth: 1280,
  },
});
