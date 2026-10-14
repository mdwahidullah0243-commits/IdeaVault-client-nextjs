import { useState } from "react";
import BasicsPanel from "./BasicsPanel";
import { formInfo, steps } from "@/lib/data";
import DetailsPanel from "./DetailsPanel";
import SolutionPanel from "./SolutionPanel";
import ReviewPanel from "./ReviewPanel";
import BackBtn from "./BackBtn";

const FormCard = ({ step, setStep }) => {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState(formInfo);
    const [isPublishIdea, setIsPublishIdea] = useState('');

    const set = (key, value) => {
        setForm(field => ({ ...field, [key]: value }));
        setErrors(e => ({ ...e, [key]: undefined }));
    };

    const validate = () => {
        const e = {};
        if (step === 0) {
            if (!form.title.trim()) e.title = "Required";
            if (!form.shortDesc.trim()) e.shortDesc = "Required";
            if (!form.category) e.category = "Pick a category";
        }

        if (step === 1) {
            if (!form.audience.trim()) e.audience = "Required";
            if (form.tags.length === 0) e.tags = 'Required';
            if (!form.imageUrl.trim()) e.imageUrl = 'Required';
        }

        if (step === 2) {
            if (!form.problem.trim()) e.problem = "Required";
            if (!form.solution.trim()) e.solution = "Required";
            if (!form.detailedDesc.trim()) e.detailedDesc = 'Required';
        }

        setErrors(e);

        const errorsKeys = Object.keys(e);

        return errorsKeys.length === 0;
    };

    const next = () => {
        if (validate()) {
            setStep(s => Math.min(s + 1, 3));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('idea data:', form);

        // if (isPublishIdea === 'publish') {
        //     const res = await fetch(`http://localhost:5000/idea`, {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(form)
        //     });
        //     const data = await res.json();

        //     if (data.insertedId) {
        //         alert(`${form.title} Idea successfully added`);

        //         redirect('/ideas');
        //     }
        // }
    }

    return (
        <div className="bg-[#ffffff0a] border-[0.5px] border-[#ffffff1a] rounded-2xl overflow-hidden mt-8">
            <form onClick={handleSubmit}>
                {/* Card Inner */}
                <div className="pt-7 px-7 pb-2">

                    {/* STEP: 0 — Basics */}
                    {
                        step === 0 && <BasicsPanel errors={errors} form={form} set={set} />
                    }

                    {/* STEP: 1 — Details */}
                    {
                        step === 1 && <DetailsPanel errors={errors} form={form} set={set} />
                    }

                    {/* STEP: 2 - Solution */}
                    {
                        step === 2 && <SolutionPanel errors={errors} form={form} set={set} />
                    }

                    {/* STEP: 3 — Review */}
                    {
                        step === 3 && <ReviewPanel form={form} />
                    }

                </div>

                {/* Footer Nav */}
                <div className="border-t-[0.5px] border-[#ffffff14] py-4 px-7 mt-5 flex justify-between items-center">
                    {/* Back */}
                    <BackBtn step={step} setStep={setStep} />

                    {/* Submit Btn */}
                    <div className="flex gap-2.5 items-center">
                        {/* stepCount */}
                        <span className="text-xs text-[#ffffff33]">
                            {step + 1} / {steps.length}
                        </span>

                        {
                            step < 3
                                ?
                                // btnPrimary
                                <button type="button" className="bg-[#e8b84b] text-[#1A1A2E] font-bold text-sm py-3 px-5 border-none rounded-lg cursor-pointer" onClick={next}>
                                    Continue →
                                </button>
                                :
                                // btnPublish
                                <button onClick={() => setIsPublishIdea('publish')} type="submit" className="bg-[#e8b84b] text-[#1A1A2E] font-bold text-sm py-3 px-5.5 border-none rounded-lg cursor-pointer">
                                    🚀 Publish Idea
                                </button>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormCard;