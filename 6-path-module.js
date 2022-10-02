const path = require("path")

const filePath = path.join(__dirname,'/content', 'subfolder', 'test.txt')

const base = path.basename(filePath)

const dirName  =  path.dirname(filePath)

const abs = path.resolve(filePath)

console.log(base);
console.log(dirName);
console.log(abs);