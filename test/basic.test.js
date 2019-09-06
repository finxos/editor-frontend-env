const getEnv = require('../src');

describe('Basic test', () => {
  test('test development', () => {
    process.env.NODE_ENV = 'development';
    var res = getEnv();
    expect(res.ENTRY_POINT).toBe('https://tu-dev.finxos.com');
  });

  test('test production', () => {
    process.env.NODE_ENV = 'production';
    var res = getEnv();
    expect(res.ENTRY_POINT).toBe('https://cloud.finxos.com');
  });

  test('test uat.finxos.com', () => {
    var res = getEnv('uat.finxos.com');
    expect(res.ENTRY_POINT).toBe('https://uat.finxos.com');
  });

  test('test other domain', () => {
    var res = getEnv('xyz.finxos.com');
    expect(res.ENTRY_POINT).toBe('https://cloud.finxos.com');
  });

  test('test customize env', () => {
    window.__EDITOR_FRONTEND_ENV__ = { ENTRY_POINT: 'https://api.finxos.com' };
    var res = getEnv();
    expect(res.ENTRY_POINT).toBe('https://api.finxos.com');
  });
});
