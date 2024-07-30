const validateFields = (email, captcha) => {
    const errors = [];
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.push('Email ID is required.');
    } else if (!emailRegex.test(email)) {
      errors.push('Invalid Email ID.');
    }
  
    // Captcha validation
    if (!captcha) {
      errors.push('Captcha Code is required.');
    } else if (captcha !== '123') {
      errors.push('Invalid Captcha Code.');
    }
  
    return errors;
  };
  
  export default validateFields;
  