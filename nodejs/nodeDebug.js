const http = require('http')

const server = http.createServer((req, res)=>{
  res.StatusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(8080, ()=>{
  console.log('Server listen on 8080.');
})
const i = 1;
console.log(i);
console.log('object');