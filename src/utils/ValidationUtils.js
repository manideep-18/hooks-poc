export const isEmpty = (validationString) => {
  if (validationString) {
    return validationString.toString().replace(/\s/g, '') === '';
  }
  return true;
};

export function validateEmpty(validationString) {
  if (isEmpty(validationString)) {
    return {
      shouldShowError: true,
      errorMessage: 'required',
    };
  }
  return { shouldShowError: false, errorMessage: '' };
}
