//测试Node.js  是否安装成功
var http = require("http");

http.createServer(function(req, res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>Node.js</h1>");
	res.write("<p>Hello, world!</p>");
	res.end("<p>beyondweb.cn</p>");

}).listen(3000);
console.log("Http server is listening at port 3000");

// 通过dos系统进入NodeTest.js文件夹之后，然后node NodeTest.js 启动node，在浏览器输入http://127.0.0.1：3000