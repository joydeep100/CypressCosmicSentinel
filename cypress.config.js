const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    pageLoadTimeout: 240000,
    defaultCommandTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 60000,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 1
  },
});
