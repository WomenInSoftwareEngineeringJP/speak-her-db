import supportedLocales from '@/config/supported-locales';

export function getSupportedLocales() {
  const annotatedLocales = [];

  /* eslint-disable no-restricted-syntax */
  for (const code of Object.keys(supportedLocales)) {
    annotatedLocales.push({
      code,
      name: supportedLocales[code],
    });
  }
  /* eslint-enable */

  return annotatedLocales;
}

export function supportedLocalesInclude(locale) {
  return Object.keys(supportedLocales).includes(locale);
}
