const http = require("http")

const resProductos = (_req, res) => {
    res.end("Prueba")
}

const server = http.createServer((req, res) => {
        switch(req.url){
            case '/productos':
                resProductos(req, res)
                break
            default:
        res.end("<H1>Hola como va</H1>");
    }
});

const PORT = 8080

server.listen(PORT, () => {
    console.log((`Servidor Corriendo en puerto ${PORT}`));
})
