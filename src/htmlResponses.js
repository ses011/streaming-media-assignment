const fs = require('fs');

const getIndex = (request, response, page) => {
  const index = fs.readFileSync(`${__dirname}/../client/${page}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;
