const path = require('path')
const fs = require('fs')
// 注意 一个../会抵消前面一层路径
const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr) // 输出 \a\b\d\e

const pathSte2 = path.join(__dirname, './files/1.txt')
console.log(pathSte2) // 输出 当前文件所处目录\files\1.txt

// 路径拼接方式
fs.readFile(path.join(__dirname, './files/1.txt'),'utf8',function(err,dataStr){
    if (err) {
        return console.log('获取文件失败---' + err)
    }
    console.log(dataStr)
})



