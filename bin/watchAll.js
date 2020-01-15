#!/usr/bin/env node

// Command line example:
// "watch": "concurrently --names \"JSDOC, TSC, ROLLUP\" -c \"black.bold.bgBlue,black.bold.bgMagenta,black.bold.bgYellow\" \"npm:watch:docs\" \"npm:watch:tsc\" \"npm:watch:rollup\""

process.env.DEV_WATCH_MODE = true

const concurrently = require('concurrently')

const buildDev = async () => {
  return await concurrently(
    [
      {
        command: 'yarn:watch-tsc',
        name: 'TSC',
        prefixColor: 'black.bold.bgMagenta'
      },
      {
        command: 'yarn:watch-rollup',
        name: 'ROLLUP',
        prefixColor: 'black.bold.bgCyan'
      },
      {
        command: 'yarn:watch-test',
        name: 'JEST',
        prefixColor: 'black.bold.bgGreen'
      },
      {
        command: 'yarn:watch-docs',
        name: 'DOCS',
        prefixColor: 'black.bold.bgYellow'
      }
    ],
    {
      killOthers: ['failure'],
      restartTries: 1
    }
  )
    .catch(err => Promise.resolve(err))
}

try {
  buildDev()
}
catch(err){
  console.log(err)
}
