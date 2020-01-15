import React from 'react';

import { Component } from './Component';

describe('testing JSX in tests', () => {
  it('does not throw', () => {
    expect(() => <Component />).not.toThrow();
  });
});
