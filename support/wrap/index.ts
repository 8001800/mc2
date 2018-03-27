#!/usr/bin/env node

import * as yargs from 'yargs'
import * as mkdirp from 'mkdirp'
import * as path from 'path'
import * as glob from 'glob'
import * as fs from 'fs'
import ContractTemplate from './ContractTemplate'
import IndexTemplate from './IndexTemplate'

let args = yargs
  .option('output', {
    describe: 'Folder for generated files',
    alias: 'o'
  })
  .argv

let pattern = args._[0]
let fileNames = glob.sync(pattern)
if (fileNames.length) {
  let templatesDir = path.resolve(__dirname, 'templates')
  let outputDir = path.resolve(__dirname, '..', '..', 'build', 'wrappers')
  let transformer = new ContractTemplate(templatesDir, outputDir)
  let indexTransformer = new IndexTemplate(templatesDir, outputDir)

  if (!fs.existsSync(outputDir)) {
    mkdirp.sync(outputDir)
  }

  fileNames.forEach(fileName => {
    transformer.render(fileName)
  })

  indexTransformer.render(fileNames)
} else {
  console.error(`No Truffle Contract artifact found at ${pattern}`)
  process.exit(1)
}
