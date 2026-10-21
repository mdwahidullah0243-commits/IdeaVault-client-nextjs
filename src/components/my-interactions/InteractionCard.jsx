'use client';

import { formatDistanceToNow } from "date-fns";

const InteractionCard = ({ interaction }) => {

    return (
        <div className="hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] hover:-translate-y-1 cursor-pointer transition-all duration-200 space-y-2 border border-slate-700 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-500">
                {
                    formatDistanceToNow(new Date(interaction?.createdAt), {
                        addSuffix: true
                    })
                }
            </p>

            <h2 className="text-base font-semibold text-slate-200">
                {interaction?.title}
            </h2>

            <p className="line-clamp-2 italic text-base font-semibold text-slate-300">
                {interaction?.text || interaction?.shortDesc}
            </p>
        </div>
    );
};

export default InteractionCard;