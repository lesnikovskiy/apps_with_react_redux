import expect from 'expect';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should pass', () => {
    expect(false).toEqual(false);
  });

  it('should pass too', () => {
    expect("string").toBe("string");
  });
});
