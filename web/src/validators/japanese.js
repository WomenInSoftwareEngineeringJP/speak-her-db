// custom vuelidate validator to ensure input is Japanese
// inspired by https://stackoverflow.com/questions/15033196/using-javascript-to-check-whether-a-string-contains-japanese-characters-includi
// Do not include half-width katakana FF5F-FF9F (https://www.localizingjapan.com/blog/2012/01/20/regular-expressions-for-japanese-text/)
const japanese = (value) => {
  const jaRegex = /^[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff5e\u4e00-\u9faf\u3400-\u4dbf]*$/;

  return jaRegex.test(value);
};

export default japanese;
