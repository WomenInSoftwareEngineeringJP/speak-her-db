/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import japanese from '@/validators/japanese';

describe('japanese.js', () => {
  it('accepts Hiragana', () => {
    expect(japanese('すごいですね！わたしはねこです。')).to.be.true;
  });
  it('accepts Katakana', () => {
    expect(japanese('チーズバーガートネコ！')).to.be.true;
  });
  it('accepts Kanji', () => {
    expect(japanese('鼠色大学')).to.be.true;
  });
  it('rejects Rōmaji', () => {
    expect(japanese('This is Romaji')).to.be.false;
    expect(japanese('すごいsurprise')).to.be.false;
  });
  it('rejects Emoji', () => {
    expect(japanese('🧐')).to.be.false;
    expect(japanese('すごい🧐')).to.be.false;
  });
});
