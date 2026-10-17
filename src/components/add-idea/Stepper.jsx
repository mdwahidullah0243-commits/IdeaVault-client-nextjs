import { steps, styles } from "@/lib/frontend-data";
import { FaCheck } from "react-icons/fa";

const Stepper = ({ step }) => {

    return (
        <div className='flex items-center mb-6'>
            {
                steps.map((label, i) => (
                    <div key={i} className='flex flex-row items-center flex-1 relative'>
                        <div
                            className={`w-8.5 h-8.5 rounded-[50%] border-[1.5px] border-[#ffffff26] flex items-center justify-center bg-[#ffffff0a] shrink-0 z-1`}
                            style={{ ...(i === step ? styles.stepActive : i < step ? styles.stepDone : {}) }}>
                            {
                                i < step
                                    ? <FaCheck className="text-[#242424]" />
                                    :
                                    <span className='text-xs font-medium text-[#ffffff66]'>
                                        {i + 1}
                                    </span>
                            }
                        </div>

                        {
                            i < steps.length - 1 && (
                                <div style={{ ...styles.stepLine, ...(i < step ? styles.stepLineDone : {}) }} />
                            )
                        }

                        <span style={{ ...styles.stepLabel, ...(i === step ? styles.stepLabelActive : {}) }}>
                            {label}
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default Stepper;