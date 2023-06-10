/*  import {createServer} from 'http'
 console.clear();
 const servidor = createServer((Peticion, respuesta) =>(
     console.log('Peticion recibida')
 ));

 servidor.listen(3000);

 export default servidor; */


/* import http from "http"
import fs from "fs"

const hostname = 'localhost';
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

export default server; */


import http from 'http';
import fs from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });

    };
    
    const server = http.createServer(requestListener);
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });