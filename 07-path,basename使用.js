const path = require('path')

const fpath = '/a/b/c/index.html'
// const fullName = path.basename(fpath)
// console.log(fullName)
// 输出 index.html

const nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt)
// 输出 index