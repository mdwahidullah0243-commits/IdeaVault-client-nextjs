import { MessageCircle } from "lucide-react";
import Image from "next/image";

const EmptyComments = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-default-100">
                {/* <MessageCircle
                    size={30}
                    strokeWidth={1.5}
                    className="text-slate-200"
                /> */}

                <Image src={'/comment.png'} alt="comment" width={60} height={60} />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
                No comments yet
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-300">
                Be the first to share your thoughts on this idea.
                Start the conversation!
            </p>
        </div>
    );
};

export default EmptyComments;