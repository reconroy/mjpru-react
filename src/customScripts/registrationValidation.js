export const validateFormData = (data) => {
    let errors = {};
  
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    // used regex for email format validations
    if (!data.confirmEmail) {
      errors.confirmEmail = "Confirmation email is required";
    } else if (data.email !== data.confirmEmail) {
      errors.confirmEmail = "Emails do not match";
    }
  
    if (!data.firstName) {
      errors.firstName = "First name is required";
    }
  
    if (!data.fatherName) {
      errors.fatherName = "Father's name is required";
    }
  
    if (!data.motherName) {
      errors.motherName = "Mother's name is required";
    }
  
    if (!data.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d+$/.test(data.mobile)) {
      errors.mobile = "Mobile number is invalid";
    }
  
    if (!data.captcha) {
      errors.captcha = "Captcha is required";
    }
  
    
    return errors;
  };

  // registrationValidation.js 
  