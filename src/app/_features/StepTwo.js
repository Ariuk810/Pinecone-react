import { useState } from "react";
import { FormInput } from "../_components/form-input";

const checkIfEmailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const checkIfPasswordIsStrong = (password) => {
  return /^[A-Za-z\d!@#$%^&*(){}?]{8,}$/.test(password);
};
const checkIfPhoneIsValid = (phone) => {
  return /^\+?\d{8,12}$/.test(phone);
};
const checkIfPasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const StepTwo = (props) => {
  const { handleNextStep, handleBackStep } = props;

  const [errorState, setErrorstate] = useState({});

  const [formValues, setFormValues] = useState({
    Email: "",
    PhoneNumber: "",
    Password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  console.log(formValues, "formValues");
  const validateInput = () => {
    const errors = {};
    console.log(checkIfEmailIsValid(formValues.Email), "hahah");

    if (!checkIfEmailIsValid(formValues.Email)) {
      errors.Email = "Email is invalid";
    }
    if (!checkIfPasswordIsStrong(formValues.Password)) {
      errors.Password = "Password is too weak";
    }
    if (!checkIfPhoneIsValid(formValues.PhoneNumber)) {
      errors.PhoneNumber = "Phone number is invalid";
    }
    if (
      !checkIfPasswordsMatch(formValues.Password, formValues.confirmPassword)
    ) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const continueButton = () => {
    const errors = validateInput();
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      setErrorstate({});
      handleNextStep();
    } else {
      setErrorstate(errors);
    }
  };

  return (
    <div className="Container">
      <div>
        <img className="pine-logo" src="pine.svg"></img>
      </div>
      <div>
        <h1 className="join">Join Us!</h1>
        <p className="please">
          Please provide all current information accurately.
        </p>
      </div>

      <div>
        <FormInput
          inputTag={"Email"}
          handlechange={handleInputChange}
          name={"Email"}
          value={formValues.Email}
          error={errorState.Email}
          errorMassage={"Email error"}
        />
        <FormInput
          inputTag={"PhoneNumber"}
          handlechange={handleInputChange}
          name={"PhoneNumber"}
          value={formValues.PhoneNumber}
          error={errorState.PhoneNumber}
          errorMassage={"Phone number error"}
        />
        <FormInput
          inputTag={"Password"}
          handlechange={handleInputChange}
          name={"Password"}
          value={formValues.Password}
          error={errorState.Password}
          errorMassage={"Password error"}
        />
        <FormInput
          inputTag={"confirmPassword"}
          handlechange={handleInputChange}
          name={"confirmPassword"}
          value={formValues.confirmPassword}
          error={errorState.confirmPassword}
          errorMassage={"Confirm password error"}
        />
      </div>
      <div className="continue2">
        <button onClick={handleBackStep} className="back">
          Back
        </button>
        <button className="continue-2" onClick={continueButton}>
          Continue 2/3
        </button>
      </div>
    </div>
  );
};
