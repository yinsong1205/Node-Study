const fs = require('fs')
fs.writeFile('./files/2.txt', '5555', function(err, dataStr) {
    // 如果文件写入成功，则err的值等于 null
    // 如果文件写入失败，则err的值等于一个 错误对象
    if (err) {
        return console.log('写入文件失败--' + err)
    }
    return console.log('写入文件成功--' + dataStr)
})