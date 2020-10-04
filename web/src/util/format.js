
export default function formatLanguage(language) {
  const { name, native } = language.fields;

  return (native && native !== '') ? `${name} - ${native}` : name;
}
