//Chame o módulo HTTP
var http = require("http"), fs = require('fs');

//Crie um servidor HTTP para ouvir as requisições na porta 3000
http.createServer(function (req, res) {
    const filename = req.url === '/' ? '/index.html' : req.url;
    fs.readFile(__dirname + '/public' + filename, function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(3000);

console.log('__dirname: ', __dirname);
// Imprima URL para acessar o servidor
console.log('Server running at http://127.0.0.1:3000/')