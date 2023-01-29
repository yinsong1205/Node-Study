// 导入fs模块，来操作模块
const fs = require('fs')

// 调用fs.readFile()方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的编码格式，一般是utf8
// 参数3：回调函数，拿到读取失败和成功结果 err失败，dataStr成功
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    // 打印失败的结果
    // 如果读取成功，则err的值为 null
    // 如果读取失败，则err的值为 错误对象，dataStr的值为undefined
    console.log(err)
    console.log('-----')
    // 打印成功的结果
    console.log(dataStr)
})