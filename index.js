const http = require('http');

const server = http.createServer((req,res) =>{
    const {url, method} = req;

    if (url =='/'){
        if(method == 'GET'){
            return res.end('Get World');
        }
        else if(method == 'POST'){
            return res.end('Post World');
        }
        else {
            return res.end('Endpoinr not found');
        }
    }
})

server.listen(3002,'localhost',() => {
    console.log('Server is running on http://localhost:3002');
})