const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    specPattern: "cypress/tests/**/*.cy.js",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
