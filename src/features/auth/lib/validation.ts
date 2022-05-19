const isStringHasSpaceOrLineTranslations = (str: string) => {
  if (!str || typeof str !== 'string') {
    return false;
  }
  const regex = /\s/g;
  const lengthOfSpaceAndLineTranslations = str.match(regex)?.length;
  return lengthOfSpaceAndLineTranslations === undefined
    ? false
    : lengthOfSpaceAndLineTranslations > 0;
};

export { isStringHasSpaceOrLineTranslations };
