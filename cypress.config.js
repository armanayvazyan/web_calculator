const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "test/e2e/cypress/support/e2e.{js,jsx,ts,tsx}",
    specPattern: "test/e2e/cypress/e2e/*.{js,jsx,ts,tsx}",
    video: false
  },
});
