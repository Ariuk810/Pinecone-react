import { useState } from "react";
export const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;
  const [errorState, setErrorState] = useState("");
  const [dob, setDob] = useState("");

  const validateDob = () => {
    if (!dob) return "Torson odroo bich golgoo";

    const dobDate = new Date(dob);
    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    if (dobDate > eighteenYearsAgo) {
      return "18 hursen baina bayr hurgii";
    }

    return "";
  };

  const onContinue = () => {
    const validationError = validateDob();
    if (validationError) {
      setErrorState(validationError);
      return;
    }
    setErrorState("");
    handleNextStep();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
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
      <p className="first">Date of birth *</p>
      <input
        className="task"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      ></input>
      {errorState && <p style={{ color: "red" }}>{errorState}</p>}
      <p className="first">Profile image *</p>
      <div className="Add">
        <img src="Label.png" alt="Profile"></img>
      </div>
      <div className="continue2">
        <button onClick={handleBackStep} className="back">
          Back
        </button>
        <button className="continue-2" onClick={onContinue}>
          Continue 3/3
        </button>
      </div>
    </div>
  );
};
