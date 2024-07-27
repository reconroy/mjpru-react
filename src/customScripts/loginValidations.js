// login validation.js

export const validateLoginForm = (data) => {
    let errors = {};

    // Email validation
    if (!data.email) {
        errors.email = "Email ID is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email ID is invalid";
    }

    // Password validation
    if (!data.password) {
        errors.password = "Password is required";
    }

    // Captcha validation
    if (!data.captcha) {
        errors.captcha = "Captcha is required";
    } else if (data.captcha !== '123') {
        errors.captcha = "Captcha is incorrect";
    }

    return errors;
};
