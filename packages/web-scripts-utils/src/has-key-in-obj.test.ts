import { hasKeyInObj } from './has-key-in-obj';

describe('hasKeyInObj', () => {
  it('works when the key is defined', () => {
    expect(hasKeyInObj('a', { a: 1, b: 2 })).toBe(true);
  });

  it('works when the key is not defined', () => {
    expect(hasKeyInObj('c', { a: 1, b: 2 })).toBe(false);
  });

  it('works when the key is nested and defined', () => {
    expect(hasKeyInObj('c.foo', { a: 1, b: 2, c: { foo: 'bar' } })).toBe(true);
  });

  it('works when the key is nested and undefined', () => {
    expect(hasKeyInObj('c.baz', { a: 1, b: 2, c: { foo: 'bar' } })).toBe(false);
  });

  it('works when the key is nested and undefined early', () => {
    expect(hasKeyInObj('d.baz', { a: 1, b: 2, c: { foo: 'bar' } })).toBe(false);
  });
});
