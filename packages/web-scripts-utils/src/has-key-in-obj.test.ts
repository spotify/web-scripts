/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

  it('does not fail when the object is undefined', () => {
    expect(() => hasKeyInObj('foo', undefined)).not.toThrow();
  });
});
