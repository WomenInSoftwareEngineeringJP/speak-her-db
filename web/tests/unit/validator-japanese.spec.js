import { expect } from 'chai';
import japanese from '@/validators/japanese';

describe('japanese.js', () => {
  it('accepts Hiragana', () => {
    const msg = 'すごいですね！わたしはねこです。';
    // eslint-disable-next-line no-unused-expressions
    expect(japanese(msg)).to.be.true;
  });
  it('accepts Katakana', () => {
    const msg = 'チーズバーガートネコ！';
    // eslint-disable-next-line no-unused-expressions
    expect(japanese(msg)).to.be.true;
  });
  it('accepts Kanji', () => {
    const msg = '鼠色大学';
    // eslint-disable-next-line no-unused-expressions
    expect(japanese(msg)).to.be.true;
  });
  it('rejects Rōmaji', () => {
    const msg = 'This is Romaji';
    // eslint-disable-next-line no-unused-expressions
    expect(japanese(msg)).to.be.false;
  });
});
