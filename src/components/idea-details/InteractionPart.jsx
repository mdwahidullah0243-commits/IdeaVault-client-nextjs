import { updateVotes } from "@/lib/actions";
import CommentsModal from "./CommentsModal";
import VotesOnIdea from "./VotesOnIdea";

const InteractionPart = ({ idea }) => {
    return (
        <div className="space-y-3 mt-6">
            <p className="">
                What do you think of this idea? Share your thoughts, feedback, and suggestions in the comments!
            </p>

            <div className="flex items-center gap-3">
                <VotesOnIdea idea={idea} updateVotesAction={updateVotes} />

                <CommentsModal idea={idea} />
            </div>
        </div>
    );
};

export default InteractionPart;