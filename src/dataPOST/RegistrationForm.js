export const validateFormData = (data) => {
    let errors = {};
  
    // Email validation
    if (!data.Email) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.Email)) {
      errors.Email = "Email is invalid";
    }
    if (!data.confirmEmail) {
      errors.confirmEmail = "Confirmation Email is required";
    } else if (data.Email !== data.confirmEmail) {
      errors.confirmEmail = "Emails do not match";
    }
  
    // Required fields for validation
    const requiredFields = ['first_name', 'fathers_name', 'mothers_name', 'mobile_number', 'country_code', 'captcha'];
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required.`;
      }
    });
  
    // Additional validations for mobile_number
    if (data.mobile_number) {
      if (!/^\d+$/.test(data.mobile_number)) {
        errors.mobile_number = "Mobile number must be numeric";
      }
    }
  
    // Validation to ensure names do not contain numbers
    const nameFields = ['first_name', 'last_name', 'middle_name', 'fathers_name', 'mothers_name'];
    nameFields.forEach(field => {
      if (data[field] && /\d/.test(data[field])) {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1')} should not contain numbers.`;
      }
    });
  
    // CountryCode validation
    if (!data.country_code || data.country_code === "default") { // Adjust default value check if necessary
      errors.country_code = "Country Code is required";
    }
  
    // Optional Alternate Mobile Number validation
    if (data.Alternate_mobile_number) {
      if (!/^\d+$/.test(data.Alternate_mobile_number)) {
        errors.Alternate_mobile_number = "Alternate mobile number must be numeric";
      }
      if (data.Alternate_mobile_number === data.mobile_number) {
        errors.Alternate_mobile_number = "Alternate mobile number must be different from the primary mobile number";
      }
    }
  
    console.log(errors);
    return errors;
  };
  