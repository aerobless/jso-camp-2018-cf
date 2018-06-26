import { expect } from 'chai';

import { helloFn } from './hello';

describe('Hello function', () => {
  it('returns hello world', () => {
    expect(helloFn()).to.eql('Hoi du! Ich bin en REST Endpoint ^__^ ... oder au nöd 42');
  });
});
