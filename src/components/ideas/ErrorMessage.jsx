import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorMessage = ({ error, setCategory }) => {
    return (
        <div className="flex min-h-87.5 flex-col items-center justify-center px-5 py-12 text-center">

            {/* Error Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/15 bg-red-500/10">
                <AlertCircle
                    size={38}
                    strokeWidth={1.5}
                    className="text-red-400"
                />
            </div>

            {/* Error Content */}
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#e8eaf0]">
                Something Went Wrong
            </h2>

            <p role="alert" className="mb-7 max-w-md text-sm leading-6 text-[#9ca3af]">
                {error || "We couldn't load your ideas. Please try again."}
            </p>

            <button
                type="button"
                onClick={() => setCategory('HealthTech')}
                className="cursor-pointer inline-flex items-center gap-2.5 rounded-xl border border-[#ffffff1a] bg-[#ffffff0f] px-6 py-3 text-sm font-semibold text-[#e8eaf0] transition-all duration-200 hover:border-red-400/30 hover:bg-red-500/10 active:scale-95"
            >
                <RefreshCw size={16} />
                Try Again
            </button>
        </div>
    );
};

export default ErrorMessage;
