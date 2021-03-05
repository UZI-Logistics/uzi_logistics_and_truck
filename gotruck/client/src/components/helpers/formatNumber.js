// remove white spaces from phone numbers
export let formatNumber = (mobile) => {
  const regex = /(\d)\s+(?=\d)/g;
  const subst = `$1`;

  // The substituted value will be contained in the result variable
  return mobile.replace(regex, subst);
};
