const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (request, response) {
    response.sendFile(__dirname+'/public/index')
})

const HOST = "localhost";
const PORT = 8080;
app.listen(PORT)

console.log(`Servidor corriendo en http://${HOST}:${PORT}`);