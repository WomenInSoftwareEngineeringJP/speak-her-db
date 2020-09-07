
export default function formatLanguage(language) {
  const name = language.get('name');
  const native = language.get('native');

  return (native && native !== '') ? `${name} - ${native}` : name;
}
