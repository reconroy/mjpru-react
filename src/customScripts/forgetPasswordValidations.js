const validateFields = (email, inputCaptcha, generatedCaptcha) => {
  const errors = [];

  if (!email) {
      errors.push("Email is required.");
  } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      errors.push("Invalid email format.");
  }

  if (!inputCaptcha) {
      errors.push("Captcha code is required.");
  } else if (inputCaptcha !== generatedCaptcha) {
      errors.push("Captcha code is incorrect.");
  }

  return errors;
};

export default validateFields;
