// create server hapi app
const Hapi = require('@hapi/hapi');

const createServer = ({ mathBasic }) => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 3000,
  });
  server.route([{
    method: 'GET',
    path: '/add/{a}/{b}',
    handler: (request) => {
      const { a, b } = request.params;
      const result = mathBasic.add(Number(a), Number(b));
      return result;
    },
  }]);
  return server;
};

module.exports = createServer;
