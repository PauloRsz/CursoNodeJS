import http from "http"
import url from "url"
import fs from "fs"

const port = 3000

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if(filename.includes('html')) {
        if(fs.existsSync(filename)) {
            fs.readFile(filename, function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
            })
        } else {

            // se o usuario digitar um caminho incorreto, que não existe, ele será direcionado para a página de erro 404

            fs.readFile('404.html', function(err, data) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})