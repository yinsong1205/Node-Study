const http = require('http')
const server = http.createServer()

server.on('request',(req, res) => {
    const url = req.url
    const method = req.method
    const str = `你请求的URL地址是 ${url}, 请求method类型是 ${method}`
    // 调用res.setHeader这个方法，设置Content-Type响应头，解决中文乱码的问题
    res.setHeader('Content-Type','text/html; charset=utf-8')

    res.end(str)
})
server.listen(80,() => {
    console.log('sever running at http://127.0.0.1')
})