"use client";
import { useState } from "react";
import "./index.css";
import { StepOne } from "./_features/StepOne";
import { StepTwo } from "./_features/StepTwo";
import { StepThree } from "./_features/StepThree";
import { Succes } from "./_features/Succes";
export default function Home() {
  const [step, setStep] = useState(3);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    if (step === 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };

  return (
    <>
      {step === 1 && <StepOne handleNextStep={handleNextStep} />}
      {step === 2 && (
        <StepTwo
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      )}
      {step === 3 && (
        <StepThree
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      )}
      {step === 4 && <Succes handleNextStep={handleNextStep} />}
    </>
  );
}
