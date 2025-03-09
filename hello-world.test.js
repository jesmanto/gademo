const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should respond with Hello World', async () => {
    const response = await request(app.server).get('/');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('Hello World!');
  });

  afterAll(() => {
    app.server.close();
  });
});