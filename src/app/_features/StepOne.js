"use client";

import { useState } from "react";
import { FormInput } from "../_components/form-input";

const checkIfInputHasSpecialCharacter = (string) => {
  return /[!@#$%^&*(){}?]/.test(string);
};

const checkIfInputHasNumbers = (string) => {
  return /\d/.test(string);
};
export const StepOne = (props) => {
  const { handleNextStep } = props;
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [errrorState, setErrorstate] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validateInput = () => {
    const errors = {};

    if (
      checkIfInputHasNumbers(formValues.firstName) ||
      checkIfInputHasSpecialCharacter(formValues.firstName)
    ) {
      errors.firstName = "Input should have only letters";
    }
    if (
      checkIfInputHasNumbers(formValues.lastName) ||
      checkIfInputHasSpecialCharacter(formValues.lastName)
    ) {
      errors.lastName = "Lastname input should have only letters";
    }
    if (
      checkIfInputHasNumbers(formValues.userName) ||
      checkIfInputHasSpecialCharacter(formValues.userName)
    ) {
      errors.userName = "Username input should have only letters";
    }
    return errors;
  };

  const ContinueButton = () => {
    const errors = validateInput();

    if (Object.keys(errors).length === 0) {
      setErrorstate({});
      handleNextStep();
    } else {
      setErrorstate(errors);
    }
  };
  const shouldDisableButton = () => {
    return (
      formValues.firstName.length === 0 ||
      formValues.lastName.length === 0 ||
      formValues.userName.length === 0
    );
  };
  // const [firstName, setFirstName] = useState("");
  // const [firstNameError, setFirstNameError] = useState(false);

  // const [lastName, setLastName] = useState("");
  // const [lastNameError, setLastNameError] = useState(false);

  // const [userName, setUserName] = useState("");
  // const [usernameError, setUsernameError] = useState(false);

  // const handleChangeFirstNameInput = (e) => {
  //   const value = e.target.value;
  //   setFirstName(value);

  //   if (value.length < 3) {
  //     setFirstNameError(true);
  //   } else {
  //     setFirstNameError(false);
  //   }
  // };

  // const handleChangeLastNameInput = (e) => {
  //   const value = e.target.value;
  //   setLastName(value);

  //   if (value.length < 3) {
  //     setLastNameError(true);
  //   } else {
  //     setLastNameError(false);
  //   }
  // };

  // const handleChangeUsernameInput = (e) => {
  //   const value = e.target.value;
  //   setUserName(value);

  //   if (value.length < 3) {
  //     setUsernameError(true);
  //   } else {
  //     setUsernameError(false);
  //   }
  // };

  // const handleButtonClick = () => {
  //   if (!firstNameError && !lastNameError && !usernameError) {
  // alert("Баяр хүргэе чи зөв бичлээ пизда минь");
  //   }
  // };
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
          inputTag={"First Name"}
          handlechange={handleInputChange}
          name={"firstName"}
          value={formValues.firstName}
          error={errrorState.firstName}
          errorMassage={"first name Буруу"}
        />
        <FormInput
          inputTag={"Last Name"}
          handlechange={handleInputChange}
          name={"lastName"}
          value={formValues.lastName}
          error={errrorState.lastName}
          errorMassage={"Last name Буруу"}
        />
        <FormInput
          inputTag={"User Name"}
          handlechange={handleInputChange}
          name={"userName"}
          value={formValues.userName}
          error={errrorState.userName}
          errorMassage={"User name Буруу"}
        />
        {/* <p className="first">First name*</p>
        <input
          className={errrorState.firstName ? "input-error" : "task"}
          placeholder="Placeholder"
          onChange={handleInputChange}
          name="firstName"
          value={formValues.firstName}
        ></input>

        {errrorState.firstName && (
          <div style={{ color: "red" }}>
            First name cannot contain special characters or numbers.
          </div>
        )}
      </div>
      <div>
        <p className="first">Last name*</p>
        <input
          className={errrorState.lastName ? "input-error" : "task"}
          placeholder="Placeholder"
          onChange={handleInputChange}
          name="lastName"
          value={formValues.lastName}
        ></input>

        {errrorState.lastName && (
          <div style={{ color: "red" }}>
            Last name cannot contain special characters or numbers.
          </div>
        )}
      </div>

      <div>
        <p className="first">Username*</p>
        <input
          className={errrorState.userName ? "input-error" : "task"}
          placeholder="Placeholder"
          value={formValues.userName}
          onChange={handleInputChange}
          name="userName"
        ></input>
        {errrorState.userName && (
          <div style={{ color: "red" }}>
            "This username is already taken. Please choose another one."
          </div>
        )} */}
      </div>

      <button
        className="Continue"
        disabled={shouldDisableButton()}
        onClick={ContinueButton}
      >
        Continue 1/3
      </button>
    </div>
  );
};
