import { expect } from 'chai';

import { getKickerboxes } from './getKickerboxes';

describe('Entrypoint for Kickerbox REST endpoint', () => {
  it('returns some text', () => {
    expect(getKickerboxes()).to.eql('Hoi du! Ich bin en REST Endpoint ^__^ ... oder au nöd 42');
  });
});
