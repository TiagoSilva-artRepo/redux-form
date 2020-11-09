const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.firstName = "You must enter the first name";
    }

    if (!formValues.description) {
        errors.lastName = "You must enter the last name";
    }

    return errors;
};


export default validateForm;