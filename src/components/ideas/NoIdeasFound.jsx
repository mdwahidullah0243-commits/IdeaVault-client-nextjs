import { LightbulbOff, RotateCcw } from "lucide-react";

const NoIdeasFound = ({ onReset }) => {
    return (
        <div className="bg-[#0b0f1c] rounded-xl flex min-h-112.5 flex-col items-center justify-center px-5 py-16 text-center">

            {/* Illustration */}
            <div className="relative mb-10 flex h-40 w-40 items-center justify-center">
                <div className="absolute inset-3 rounded-[40%] bg-indigo-500/10 blur-xl" />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-[35%] bg-indigo-400/10 -rotate-12">
                    <LightbulbOff
                        size={80}
                        strokeWidth={1.3}
                        className="rotate-12 text-indigo-300"
                    />
                </div>

                <span className="absolute -top-2 left-1/2 h-4 w-1 -translate-x-1/2 rounded-full bg-indigo-300" />
                <span className="absolute left-0 top-8 h-3 w-1 -rotate-45 rounded-full bg-indigo-300" />
                <span className="absolute right-0 top-8 h-3 w-1 rotate-45 rounded-full bg-indigo-300" />
            </div>

            {/* Content */}
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e8eaf0] sm:text-4xl">
                No Ideas Found
            </h2>

            <p className="mb-8 max-w-md text-sm leading-7 text-[#a0a8bd] sm:text-base">
                We couldn't find any ideas matching your current
                filters. Try adjusting your search or category.
            </p>

            {/* Reset Button */}
            <button
                type="button"
                onClick={onReset}
                className="cursor-pointer inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-indigo-500 active:scale-95"
            >
                <RotateCcw size={18} />
                Reset Filters
            </button>
        </div>
    );
};

export default NoIdeasFound;
