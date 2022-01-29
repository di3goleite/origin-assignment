const { computeScore } = require('./lib');

describe('Financial wellness test', () => {
  test('user with healthy score', () => {
    const result = computeScore(1000, 10);
    expect(result).toBe('HEALTHY');
  });

  test('user with medium score', () => {
    const result = computeScore(1000, 30);
    expect(result).toBe('MEDIUM');
  });

  test('user with low score', () => {
    const result = computeScore(1000, 80);
    expect(result).toBe('LOW');
  });
});
