const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "Report/mutliple-html-report",
  reportName: "Playwright BDD Report",
  pageTitle: "BookCart App Test Report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "Chrome",
      version: "118"
    },
    device: "Jeeva - Machine",
    platform: {
      name: "Windows",
      version: "11"
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