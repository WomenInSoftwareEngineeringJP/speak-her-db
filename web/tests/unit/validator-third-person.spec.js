/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import isThirdPerson from '@/validators/isThirdPerson';

describe('isThirdPerson.js', () => {
  it('accepts third person English', () => {
    expect(isThirdPerson('She is a member of Women Who Code')).to.be.true;
  });
  it('accepts third person in Japanese', () => {
    expect(isThirdPerson('その後情熱に突き動かされるままに2013年に起業。')).to.be.true;
  });
  it('accepts "I" if not first person', () => {
    expect(isThirdPerson('She works in D&I')).to.be.true;
  });
  it('rejects first person in English', () => {
    expect(isThirdPerson('I\' m a front end developer')).to.be.false;
    expect(isThirdPerson('While in London, I studied things.')).to.be.false;
  });
  it('rejects first person in Japanese', () => {
    expect(isThirdPerson('私はイタリア人です。')).to.be.false;
    expect(isThirdPerson('わたし')).to.be.false;
  });
});
