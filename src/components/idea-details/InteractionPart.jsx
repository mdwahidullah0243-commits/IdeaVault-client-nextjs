import { ThumbsUp } from "lucide-react";
import CommentsModal from "./CommentsModal";

const InteractionPart = () => {
    return (
        <div className="space-y-3 mt-6">
            <p className="">
                What do you think of this idea? Share your thoughts, feedback, and suggestions in the comments!
            </p>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 cursor-pointer text-[#e8eaf0b2] hover:bg-[#e8eaf02d] py-2 px-3 rounded-xl">
                    <ThumbsUp />
                    <span>327</span>
                </div>

                <CommentsModal />
            </div>
        </div>
    );
};

export default InteractionPart;