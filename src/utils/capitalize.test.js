import capitalize from './capitalize';

describe('.capitalize', () => {
  it('should capitalize', () => {
    const expected = 'Hello world';
    const actual = capitalize('hello world');
    expect(actual).toEqual(expected);
  });
  it('should not change', () => {
    const expected = 'Hello world';
    const actual = capitalize('Hello world');
    expect(actual).toEqual(expected);
  });
  describe('when it is null, undefined or empty', () => {
    it('should return an empty string', () => {
      const expected = '';
      const actual = capitalize(null);
      expect(actual).toEqual(expected);
    });
    it('should return an empty string', () => {
      const expected = '';
      const actual = capitalize(undefined);
      expect(actual).toEqual(expected);
    });
    it('should return an empty string', () => {
      const expected = '';
      const actual = capitalize('');
      expect(actual).toEqual(expected);
    });
  });
});
