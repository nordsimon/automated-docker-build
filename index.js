require('http').createServer((req, res) => {
  res.end(`Hello from: ${require('os').hostname()}`)
}).listen(80)
