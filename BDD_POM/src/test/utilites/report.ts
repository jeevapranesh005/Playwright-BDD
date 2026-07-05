const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "reports",
  reportName: "Playwright BDD Report",
  pageTitle: "BookCart App Test Report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "Chrome",
      version: "118"
    },
    device: "Arun - Machine",
    platform: {
      name: "Windows",
      version: "10"
    }
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" }
    ]
  }
});