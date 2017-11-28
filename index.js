const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write('BFF simple starter');
  res.end();
});

server.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
