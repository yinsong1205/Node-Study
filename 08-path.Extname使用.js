const path = require('path')

const fpath = '/a/b/c/index.html'

const withoutName = path.extname(fpath)
console.log(withoutName)
// 输出 index