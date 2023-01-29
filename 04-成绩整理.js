const fs = require('fs')
fs.readFile('./files/成绩素材.txt','utf8',function(err,dataStr) {
    if (err) {
        return console.log('读取文件失败---' + err.message)
    }
    console.log('读取文件成功---' + dataStr)
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(element => {
        arrNew.push(element.replace('=',': '))
    });
    const newStr = arrNew.join('\r\n')
    console.log(arrNew)

    fs.writeFile('./files/成绩-OK.txt',newStr,function(err,dataStr) {
        if (err) {
            return console.log('写入文件失败---' + err.message)
        }
        
        console.log('写入文件成功---' + dataStr)
    })
})
