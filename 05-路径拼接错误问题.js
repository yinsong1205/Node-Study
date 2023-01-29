const fs = require('fs')
// 出现路径拼接错误问题，是因为提供了./或../开头的相对路径
// 如果要解决这个问题，可以直接提供一个完成的文件存放路径

// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败--' + err.message)
//     }
//     return console.log('读取文件成功--' + dataStr)
// })


// 移植性非常差，不利于维护
// fs.readFile('C:\\Users\\YS\\node\\files\\1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败--' + err.message)
//     }
//     return console.log('读取文件成功--' + dataStr)
// })

// __dirname表示当前文件所处目录
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败--' + err.message)
    }
    return console.log('读取文件成功--' + dataStr)
})