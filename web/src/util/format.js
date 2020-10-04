
export default function formatLanguage(language) {
  const { name } = language.fields;
  const { native } = language.fields;

  return (native && native !== '') ? `${name} - ${native}` : name;
}
