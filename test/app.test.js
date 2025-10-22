const request = require('supertest');
const { app, server } = require('../app');

describe('GET /', () => {
  it('should return hello message with timestamp', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('timestamp');
    expect(res.body).toHaveProperty('environment');
  });
});

describe('GET /health', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      status: 'OK',
      service: 'Node.js CI/CD Demo',
      timestamp: expect.any(String)
    });
  });
});

describe('GET /info', () => {
  it('should return service information', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('version');
    expect(res.body.endpoints).toContain('/');
  });
});

// Close server after tests
afterAll((done) => {
  server.close(done);
});
