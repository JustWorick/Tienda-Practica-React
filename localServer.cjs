// import {createServer} from 'http'
// console.clear();
// const servidor = createServer((Peticion, respuesta) =>(
//     console.log('Peticion recibida')
// ));

// servidor.listen(3000);

// export default servidor;

const http = require('http');
const fs = require('fs');

const hostname = '';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error){
            res.writeHead(404)
            res.write('Archivo no encontrado')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, hostname, ()=> {
    console.log(`Server Running at ${hostname}:${port}`)
})



