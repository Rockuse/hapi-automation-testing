const createServer = require('./server');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
  describe('When GET /add', () => {
    it('should return 200', async () => {
      // arrange
      const a = 5;
      const b = 2;
      const spyAdd = jest.spyOn(MathBasic, 'add');

      const server = await createServer({ mathBasic: MathBasic });
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson).toEqual(7);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });
});
