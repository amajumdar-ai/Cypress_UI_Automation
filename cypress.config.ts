import { defineConfig } from 'cypress'

export default defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimations: true,
  animationDistanceTreshold: 20,
  defaultCommandTimeout: 5000,
  execTimeout: 6000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  video: false,
  failOnStatusCode: false,
  screenshotsFolder: 'cypress/screenshots',
  fixtureFolder: 'cypress/fixtures',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
