export function formValidate(inputs) {
  const Validation = {
    name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };
  for (const input of inputs) {
    const validateData = Validation[input.current.name].test(
      input.current.value
    );
    if (!validateData) {
      return `Enter valid ${input.current.name}`;
    }
  }

  return null;
}
