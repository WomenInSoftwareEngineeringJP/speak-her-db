import { helpers } from 'vuelidate/lib/validators';

const linkedinUrl = (value) => {
  const regex = /^http(s*):\/\/(www.)?linkedin.com\/((in\/[^/]+\/?)|(pub\/[^/]+\/((\w|\d)+\/?){3}))$/;
  return !helpers.req(value) || regex.test(value);
};

const facebookUrl = (value) => {
  const regex = /^http(s*):\/\/(www.)?facebook.com\/[a-zA-Z0-9.]+\/?$/;
  return !helpers.req(value) || regex.test(value);
};

const twitterUrl = (value) => {
  const regex = /^http(s*):\/\/(www.)?twitter.com\/([a-zA-Z0-9_]+)+\/?$/;
  return !helpers.req(value) || regex.test(value);
};

export { linkedinUrl, facebookUrl, twitterUrl };
