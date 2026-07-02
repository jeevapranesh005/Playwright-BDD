module.exports={
    default:{
        "formatOptions":{
            "snippetInterface":"async-await"
        },
        requireModule:[
            "ts-node/register"
        ],

        

        require:[
            "src/test/steps/**/*.ts",
         //   "src/test/hooks/**/*.ts",
            "src/test/support/**/*.ts",
            "src/hooks/**/*.ts"
        ],

        

        paths:[
            "src/test/feature/**/*.feature",
        ],

        publishQuiet:true,
        dryRun:false,  //false for real automation

        format: [
  "progress",
  "progress-bar",
  "html:reports/cucumber-report.html",
  "json:test-results/report.json"
]

    }
};