const request = require('supertest');
const app = require('./index');

describe('Node App API Test', () => {
  it('should respond with Hello World', async () => {
    const response = await request(app.server).get('/');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('Hello World!');
  });

  it('should respond with Hello World', async () => {
    const response = await request(app.server).get('/products');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('<h1>This is the products page></h1>');
  });

  afterAll(() => {
    app.server.close();
  });
});