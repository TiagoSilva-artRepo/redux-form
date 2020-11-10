import {
    Button,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@material-ui/core";
import React from "react";
import { Field, reduxForm } from "redux-form";
import validateForm from "../utils/formValidation";

const NewUserForm = ({ handleSubmit, pristine, reset, submitting }) => {

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div>
                    <span style={{ color: "red" }}>{error}</span>
                </div>
            );
        }
    };

    const textInput = ({ input, label, meta, value }) => {
        return (
            <div>
                <InputLabel htmlFor="standard-required">{label}</InputLabel>
                <TextField id="standard-required" variant="outlined" value={value} {...input} />
                {renderError(meta)}
            </div>
        );
    };

    const passwordInput = ({ input, label, meta }) => {
        return (
            <div>
                <InputLabel htmlFor="standard-required">{label}</InputLabel>
                <TextField
                    id="outlined-password-input"
                    type="password"
                    variant="outlined"
                    {...input}
                />
                {renderError(meta)}
            </div>
        );
    };

    const radioInput = ({ input, label, meta }) => {
        return (
            <div>
                <FormLabel>{label}</FormLabel>
                <RadioGroup row name="gender" {...input}>
                    <FormControlLabel value="female" control={<Radio />} label="female" />
                    <FormControlLabel value="male" control={<Radio />} label="male" />
                    <FormControlLabel value="other" control={<Radio />} label="other" />
                </RadioGroup>
                {renderError(meta)}
            </div>
        );
    };

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <Field name="firstName" component={textInput} label="First Name:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="lastName" component={textInput} label="Last Name:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="age" component={textInput} label="Age:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="gender" component={radioInput} label="Gender:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="email" component={textInput} label="Email:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="adress" component={textInput} label="Adress:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="zipCode" component={textInput} label="Zip-Code:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field
                            name="citizenCardNumber"
                            component={textInput}
                            label="Citizen Card Number:"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="taxNumber" component={textInput} label="Tax Number:" />
                    </Grid>
                    <Grid item xs={6}>
                        <Field name="Password" component={passwordInput} label="Password:" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            disabled={pristine || submitting}
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                        <Button
                            disabled={submitting}
                            onClick={reset}
                            variant="contained"
                            color="secondary"
                        >
                            Clear Values
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default reduxForm({
    form: "newUserForm",
    validate: validateForm,
})(NewUserForm);
