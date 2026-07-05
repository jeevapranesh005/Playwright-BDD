const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "reports",
    reportPath: "reports/html-report",

    reportName: "Playwright BDD Report",
    pageTitle: "BookCart App Test Report",

    displayDuration: true,

    metadata: {
        browser: {
            name: "chrome",
            version: "118"
        },
        device: "Prasanna - Machine",
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