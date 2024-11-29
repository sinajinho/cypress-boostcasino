const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.boostcasino.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    preserveCookiesBetweenTests: true,
    scrollBehavior: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      hideXhr: true,
    },
  },
});
