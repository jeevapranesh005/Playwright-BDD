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
            "src/test/features/**/*.feature",
        ],

        publishQuiet:true,
        dryRun:false,  //false for real automation

        format:[
            "progress",
            "html:cucumber-report.html",
            
            "progress-bar",
            "html:reports/multiple-html-report.html",
            "json:reports/multiple-html-report.json",
            "rerun:@rerun.txt"
        ]

    }
};