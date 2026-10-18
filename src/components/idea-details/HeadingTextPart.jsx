'use client';

import { format } from "date-fns";
import { useEffect, useState } from "react";

const HeadingTextPart = ({ title, details, customDate }) => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setDate(new Date());
    }, []);

    return (
        <div className="mb-4 space-y-2">
            <h3 className="text-base font-bold text-[#e8eaf0]">
                {title}
            </h3>

            <p className="text-sm font-medium text-[#e8eaf0b2]">
                {
                    date ? format(new Date(customDate), 'MMM d, yyyy') : ''
                }
            </p>

            <p className="mt-4 text-sm font-medium text-[#e8eaf0b2]">
                {details}
            </p>
        </div>
    );
};

export default HeadingTextPart;