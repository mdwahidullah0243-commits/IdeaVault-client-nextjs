'use client';

import { useState } from "react";
import Stepper from "./Stepper";
import FormCard from "./FormCard";

const IdeaPostForm = () => {
    const [step, setStep] = useState(0);

    return (
        <div>
            {/* Stepper */}
            <Stepper step={step} />

            {/* Form Card */}
            <FormCard step={step} setStep={setStep} />
        </div>
    );
};

export default IdeaPostForm;