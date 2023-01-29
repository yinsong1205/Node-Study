const fs = require('fs')
// const { resolve } = require('path')
const path = require('path')

// 定义正则表达式，分别匹配<style>和<script>的正则
// \s表示空白字符 \S 表示非空白字符 *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'./clock/default.html'),'utf8',function(err,dataStr){
    if (err) {
        return console.log('读取文件失败---' + err.message)
    }
    // console.log('读取文件成功---' + dataStr)
    // 读取文件成功后
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
// 定义处理css样式的方法
function resolveCSS(htmlStr) {
    // 正则提取<style></style>标签内容
    const r1 = regStyle.exec(htmlStr)
    // 提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    // 调用fs.writeFile()方法，将提取的样式，放入clock目录中的index.css中
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,'utf8',function(err,dataStr){
        if (err) {
            return console.log('写入样式失败---' + err.message)
        }
        console.log('写入样式成功---' + dataStr)
    })
}
// 定义处理js的方法
function resolveJS(htmlStr) {
    // 正则提取<script></script>标签内容
    const r2 = regScript.exec(htmlStr)
    // 提取出来的js字符串，进行字符串的replace替换操作
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    // 调用fs.writeFile()方法，将提取的js，放入clock目录中的index.js中
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,'utf8',function(err,dataStr){
        if (err) {
            return console.log('写入js失败---' + err.message)
        }
        console.log('写入js成功---' + dataStr)
    })
}
// 定义处理html的方法
function resolveHTML(htmlStr) {
    var newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    // 调用fs.writeFile()方法，将提取的html，放入clock目录中的index.html中
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,'utf8',function(err,dataStr){
        if (err) {
            return console.log('写入HTML失败---' + err.message)
        }
        console.log('写入HTML成功---' + dataStr)
    })
}