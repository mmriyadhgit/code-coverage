const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // component: {
  //   devServer: {
  //     framework: "next",
  //     bundler: "webpack",
  //   },
  //   setupNodeEvents: (on, config) => {
  //     require('@cypress/code-coverage/task')(on, config)
  //     return config
  //   },
  // },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents: (on, config) => {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
    env: {
      codeCoverage: {
        // At end of run, call this endpoint to retrieve code coverage info from the backend
        // and combine with coverage info from frontend code executed in the browser
        url: "http://localhost:3000/api/test-coverage",
      }
    },
    // supportFile: 'app/cypress/support/e2e.js',
    // specPattern: 'app/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});