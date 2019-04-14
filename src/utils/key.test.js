import key from './key';

describe('.key', () => {
  it('should start with key', () => {
    expect(key('a')).toMatch(/key_a_/);
  });
  it('should not return the same value twice', () => {
    const first = key('a');
    const second = key('a');
    expect(first).not.toEqual(second);
  });
});
