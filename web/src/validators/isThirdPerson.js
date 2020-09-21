// custom vuelidate validator to ensure input does not contain first person
const isThirdPerson = (value) => {
  const firstPersonRegex = /((?<=[\s,.:;"’']|^)I(?=[\s,.:;"’'])|わたし|私)/;

  return !firstPersonRegex.test(value);
};

export default isThirdPerson;
