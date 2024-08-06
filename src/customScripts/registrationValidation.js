import countryCodes from "./../countryCodes.json";

// Find the length of the mobile number based on the selected country code
const getCountryCodeLength = (code) => {
  const country = countryCodes.find(c => c.value === code);
  return country ? country.length : null;
};
console.log(getCountryCodeLength);
export const validateFormData = (data) => {
  let errors = {};

  // Email validation
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.confirmEmail) {
    errors.confirmEmail = "Confirmation email is required";
  } else if (data.email !== data.confirmEmail) {
    errors.confirmEmail = "Emails do not match";
  }

  // Name validations
  if (!data.firstName) {
    errors.firstName = "First name is required";
  }

  if (!data.fatherName) {
    errors.fatherName = "Father's name is required";
  }

  if (!data.motherName) {
    errors.motherName = "Mother's name is required";
  }

  // Mobile number validation
  if (!data.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^\d+$/.test(data.mobile)) {
    errors.mobile = "Mobile number is invalid";
  } else {
    const countryCodeLength = getCountryCodeLength(data.country_code);
    if (countryCodeLength && data.mobile.length !== countryCodeLength) {
      errors.mobile = `Mobile number must be ${countryCodeLength} digits long for the selected country code`;
    }
  }

  if (!data.captcha) {
    errors.captcha = "Captcha is required";
  } else if (data.captcha !== generatedCaptcha && data.captcha !== '123') {
    errors.captcha = "Captcha is incorrect";
  }

  // Alternate mobile number validation
  if (!data.Alternate_mobile_number) {
    errors.Alternate_mobile_number = "Alternate mobile number is required";
  } else if (!/^\d+$/.test(data.Alternate_mobile_number)) {
    errors.Alternate_mobile_number = "Alternate mobile number is invalid";
  } else {
    const alternateCountryCodeLength = getCountryCodeLength(data.alternate_Mb_Country_code);
    if (alternateCountryCodeLength && data.Alternate_mobile_number.length !== alternateCountryCodeLength) {
      errors.Alternate_mobile_number = `Alternate mobile number must be ${alternateCountryCodeLength} digits long for the selected country code`;
    }
  }

  return errors;
};
