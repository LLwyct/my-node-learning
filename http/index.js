/*
 * @Author: liwenchi 
 * @Date: 2018-07-13 00:37:04 
 * @Last Modified by: liwenchi
 * @Last Modified time: 2018-07-13 01:12:28
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

// -----------------------------------------------
// 记录访问人数，暂且没任何卵用...
let connect_num = 0;
// -----------------------------------------------


// 创建一个http的服务器对象
let server = http.createServer();

// 服务器监听本地8000端口
server.listen(80, () => {
    console.log('已启动服务器');
});

// server对象监听request事件
server.on('request', (req, res) => {
    // 获得request请求的绝对路径
    let request_path = null;

    if (req.url != '/') {
        // 不是html文件，后缀名动态变化
        request_path = path.join(__dirname, '../app/Todo', req.url);
    }
    else {
        request_path = path.join(__dirname, '../app/Todo/index.html');
    }

    // 定义res的content_type类型
    let content_type = 'text/plain';

    // 如果路径不存在返回404，否则正常运行
    if (fs.existsSync(request_path) === false) {
        res.writeHead(404, {
            'Content-Type': content_type,
        });
        res.end('404 NOT FOUND', () => {

        });
    }
    else {
        // 根据request请求文件的后缀名来决定content_type类型
        switch (path.extname(request_path)) {
            case '.html':
                content_type = 'text/html';
                break;
            case '.js':
                content_type = 'application/x-javascript';
                break;
            case '.css':
                content_type = 'text/css';
                break;
            case '.jpg' || '.jpeg':
                content_type = 'image/jpeg';
                break;
            default:
                break;
        }

        // 写响应头
        res.writeHead(200, {
            'Content-Type': content_type,
        });

        // 这个管道没太懂
        fs.createReadStream(request_path).pipe(res);
    }
});