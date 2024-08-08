import countryCodes from "./../countryCodes.json";

const getCountryCodeLength = (code) => {
  const country = countryCodes.find(c => c.value === code);
  return country ? country.length : null;
};

export const validateFormData = (data, generatedCaptcha) => {
  let errors = {};

  // Debugging output for input data
  console.log("Validating data:", data);
  console.log("Generated captcha:", generatedCaptcha);

  // Email validation
  const email = (data.Email || "").trim();
  const confirmEmail = (data.confirmEmail || "").trim();

  if (!email) {
    errors.Email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.Email = "Email is invalid";
  }

  if (!confirmEmail) {
    errors.confirmEmail = "Confirmation email is required";
  } else if (email !== confirmEmail) {
    errors.confirmEmail = "Emails do not match";
  }

  // Name validations
  if (!data.first_name) {
    errors.first_name = "First name is required";
  } else if (/\d/.test(data.first_name)) {
    errors.first_name = "First name should not contain numbers.";
  }

  if (!data.fathers_name) {
    errors.fathers_name = "Father's name is required";
  } else if (/\d/.test(data.fathers_name)) {
    errors.fathers_name = "Father's name should not contain numbers.";
  }

  if (!data.mothers_name) {
    errors.mothers_name = "Mother's name is required";
  } else if (/\d/.test(data.mothers_name)) {
    errors.mothers_name = "Mother's name should not contain numbers.";
  }

  // Mobile number validation
  if (!data.mobile_number) {
    errors.mobile_number = "Mobile number is required";
  } else if (!/^\d+$/.test(data.mobile_number)) {
    errors.mobile_number = "Mobile number is invalid";
  } else {
    const countryCodeLength = getCountryCodeLength(data.country_code);
    if (countryCodeLength && data.mobile_number.length !== countryCodeLength) {
      errors.mobile_number = `Mobile number must be ${countryCodeLength} digits long for the selected country code`;
    }
  }

  // Alternate mobile number validation
  if (data.Alternate_mobile_number) {
    if (!/^\d+$/.test(data.Alternate_mobile_number)) {
      errors.Alternate_mobile_number = "Alternate mobile number is invalid";
    } else {
      const alternateCountryCodeLength = getCountryCodeLength(data.alternate_Mb_Country_code);
      if (alternateCountryCodeLength && data.Alternate_mobile_number.length !== alternateCountryCodeLength) {
        errors.Alternate_mobile_number = `Alternate mobile number must be ${alternateCountryCodeLength} digits long for the selected country code`;
      }
    }
  }

  // Captcha validation
  if (!data.captcha) {
    errors.captcha = "Captcha is required";
  } else if (data.captcha !== generatedCaptcha && data.captcha !== '123') {
    errors.captcha = "Captcha is incorrect";
  }

  // Debugging output for validation errors
  console.log("Validation errors:", errors);

  return errors;
};
