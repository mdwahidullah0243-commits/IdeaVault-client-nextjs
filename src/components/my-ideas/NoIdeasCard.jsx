import { Lightbulb, Plus } from "lucide-react";
import Link from "next/link";

const NoIdeasCard = () => {
    return (
        <div className="my-10 flex min-h-100 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/2 px-6 py-12 text-center">
            {/* Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-500/10">
                <Lightbulb
                    size={36}
                    strokeWidth={1.5}
                    className="text-violet-400"
                />
            </div>

            {/* Message */}
            <h3 className="mb-2 text-xl font-semibold text-white">
                No ideas yet
            </h3>

            <p className="mb-8 max-w-sm text-sm leading-6 text-slate-400">
                Your next big idea starts here. Capture your thoughts,
                organize your creativity, and bring your ideas to life.
            </p>

            {/* Action */}
            <Link
                href="/add-idea"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
                <Plus size={18} />
                Create Your First Idea
            </Link>
        </div>
    );
};

export default NoIdeasCard;