import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const EmptyInteractions = () => {
    return (
        <div className="flex min-h-87.5 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-12 text-center dark:border-gray-800 dark:bg-gray-950">

            {/* Icon */}
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
                <MessageCircle
                    size={36}
                    strokeWidth={1.5}
                    className="text-violet-500"
                />
            </div>

            {/* Content */}
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                No Interactions Yet
            </h3>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                You haven't interacted with any ideas yet.
                Explore ideas, share your thoughts, and join
                the conversation!
            </p>

            {/* Action */}
            <Link
                href="/ideas"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700"
            >
                Explore Ideas
                <ArrowUpRight size={17} />
            </Link>
        </div>
    );
};

export default EmptyInteractions;