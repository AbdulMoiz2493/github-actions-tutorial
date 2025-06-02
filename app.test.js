const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should respond with Hello, GitHub Actions!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, GitHub Actions!');
  });
});