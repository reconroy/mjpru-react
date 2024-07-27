// import axios from 'axios';

// const API_ENDPOINT = 'YOUR_API_ENDPOINT';

// export const submitFormData = async (formData) => {
//     try {
//         const response = await axios.post(API_ENDPOINT, formData);
//         return response.data;
//     } catch (error) {
//         console.error('Error submitting form data:', error);
//         throw error;
//     }
// };

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
    if (data.mobile && !/^\d+$/.test(data.mobile)) {
        errors.mobile = "Mobile number is invalid";
    }
    // if (data.altMobile && !/^\d+$/.test(data.altMobile)) {
    //     errors.altMobile = "Alternate mobile number is invalid";
    // }
    
    // Custom validation: Mobile and Alternate Mobile numbers should not be the same
    if (data.mobile && data.altMobile && data.mobile === data.altMobile) {
        errors.altMobile = "Alternate mobile number must be different from the primary mobile number";
    }
    console.log(errors)
    return errors;
};
