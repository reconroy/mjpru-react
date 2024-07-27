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

    // Required fields for validation
    const requiredFields = ['FirstName', 'FatherName', 'MotherName', 'Mobile', 'CountryCode', 'captcha'];
    requiredFields.forEach(field => {
        if (!data[field]) {
            errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required.`;
        }
    });

    // Additional validations
    if (data.Mobile) {
        if (!/^\d+$/.test(data.Mobile)) {
            errors.Mobile = "Mobile number must be numeric";
        } else if (data.altMobile && data.Mobile === data.altMobile) {
            errors.altMobile = "Alternate mobile number must be different from the primary mobile number";
        }
    }
    if (data.altMobile) {
        if (!/^\d+$/.test(data.altMobile)) {
            errors.altMobile = "Alternate mobile number must be numeric";
        }
    }

    // Validation to ensure names do not contain numbers
    const nameFields = ['FirstName', 'LastName', 'middleName', 'FatherName', 'MotherName'];
    nameFields.forEach(field => {
        if (data[field] && /\d/.test(data[field])) {
            errors[field] = `${field.replace(/([A-Z])/g, ' $1')} should not contain numbers.`;
        }
    });

    // CountryCode validation
    if (!data.CountryCode || data.CountryCode === "default") { // Adjust default value check if necessary
        errors.CountryCode = "Country Code is required";
    }

    console.log(errors);
    return errors;
};
