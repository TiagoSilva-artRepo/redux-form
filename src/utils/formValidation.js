const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.firstName) {
        errors.firstName = "You must enter the first name";
    }

    if (!formValues.lastName) {
        errors.lastName = "You must enter the last name";
    }

    return errors;
};


export default validateForm;