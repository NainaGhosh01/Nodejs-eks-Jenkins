const request = require('supertest');
const app = require('../app'); // Don't call app.listen inside app.js

describe('GET /', () => {
  it('responds with welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Welcome to EKS Node.js App 🚀')
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.body).toEqual({ status: 'ok' });
    expect(res.statusCode).toBe(200);
  });
});
