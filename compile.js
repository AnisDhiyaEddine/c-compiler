const fs = require('fs')
const codeGen = require('./src/codeGen')

if (process.argv.length < 4) {
  console.log('Usage: node compile <input_path> -o <output_path>')
  process.exit(1)
}

const source = fs.readFileSync(process.argv[2], 'utf8')
fs.writeFileSync(process.argv[4], codeGen(source))

console.log('Compiled successfully')
