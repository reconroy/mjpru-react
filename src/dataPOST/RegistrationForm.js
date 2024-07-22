import axios from 'axios';

const API_ENDPOINT = 'YOUR_API_ENDPOINT';

export const submitFormData = async (formData) => {
    try {
        const response = await axios.post(API_ENDPOINT, formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting form data:', error);
        throw error;
    }
};

// Validations Here -->
export const validateFormData = (formData) => {
    const errors = {};

    // Email validation
    if (!formData.email || !formData.confirmEmail) {
        errors.email = "Both email fields are required.";
    } else if (formData.email !== formData.confirmEmail) {
        errors.email = "Email and Confirm Email must match.";
    }

    // Required fields validation
    const requiredFields = ['firstName', 'middleName', 'lastName', 'fatherName', 'motherName', 'mobile', 'countryCode', 'captcha', 'altMobile'];
    requiredFields.forEach(field => {
        if (!formData[field]) {
            errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required.`;
        }
    });

    // Additional validations
    // Example: Mobile number should be numeric and valid
    if (formData.mobile && isNaN(formData.mobile)) {
        errors.mobile = "Mobile number should be numeric.";
    }
    if (formData.altMobile && isNaN(formData.altMobile)) {
        errors.altMobile = "Alternate mobile number should be numeric.";
    }

    return errors;
};
