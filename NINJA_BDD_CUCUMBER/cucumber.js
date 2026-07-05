module.exports = {
  default: {
    requireModule: ["ts-node/register"],

    require: [
      "src/world/**/*.ts",
      "src/hooks/**/*.ts",
      "src/step-definition/**/*.ts"
    ],

    paths: ["src/features/**/*.feature"],

    publishQuiet: true,

    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "rerun:@rerun.txt"
    ],

    parallel: 1
  },

  rerun: {
    requireModule: ["ts-node/register"],

    require: [
      "src/world/**/*.ts",
      "src/hooks/**/*.ts",
      "src/step-definition/**/*.ts"
    ],

    paths: ["@rerun.txt"],

    publishQuiet: true,

    format: [
      "progress",
      "json:reports/rerun-cucumber-report.json",
      "html:reports/rerun-cucumber-report.html"
    ],

    parallel: 1
  }
};