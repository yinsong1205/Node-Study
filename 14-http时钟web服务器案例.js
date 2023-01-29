const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request',(req, res) => {
    // 获取到客户端请求的url地址
    // /clock/index.html
    // /clock/index.js
    // /clock/index.css
    const url = req.url
    // 把请求的url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname,url)

    // 预定义一个空白的文件存放路径
    let fpath = ''
    if (url ==='/' ) {
        fpath = path.join(__dirname,'./clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }


    // 根据映射过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf8',(err, dataStr)=>{
        // 读取失败，想哭护短响应固定的’错误消息
        if(err) {
            return res.end('404 Not found!')
        }
        // 读取成功，讲读取成功的内容，响应给客户端
        res.end(dataStr)
    })
})

server.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')
})