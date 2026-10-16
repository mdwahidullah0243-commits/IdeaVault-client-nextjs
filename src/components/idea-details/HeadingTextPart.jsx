'use client';

import { format } from "date-fns";
import { useEffect, useState } from "react";

const HeadingTextPart = () => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setDate(new Date());
    }, []);

    return (
        <div className="mb-4 space-y-2">
            <h3 className="text-base font-bold text-[#e8eaf0]">
                AI-Powered Mental Health Coach
            </h3>

            <p className="text-sm font-medium text-[#e8eaf0b2]">
                {
                    date ? format(new Date(), 'MMM d, yyyy') : ''
                }
            </p>

            <p className="mt-4 text-sm font-medium text-[#e8eaf0b2]">
                An AI-powered mental health coach is a digital tool that uses conversational artificial intelligence to offer 24/7 support for stress, anxiety, low mood, and daily emotional wellness.
            </p>
        </div>
    );
};

export default HeadingTextPart;