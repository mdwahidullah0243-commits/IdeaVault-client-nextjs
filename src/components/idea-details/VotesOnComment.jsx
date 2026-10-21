import { Separator } from "@heroui/react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { getVoteInfoOnComment } from "@/lib/backend-data";
import { comments } from "@/lib/frontend-data";

const VotesOnComment = ({ ideaId, ideaTitle, shortDesc, comment, updateLikesOnCommentAction }) => {
    const [isLiked, setIsLiked] = useState(false);

    const { data } = authClient.useSession();

    const user = data?.user;

    // Like handler
    const handleLiked = () => {
        const newIsLiked = !isLiked;

        setIsLiked(newIsLiked);

        const votesInfo = {
            title: ideaTitle,
            shortDesc,
            userId: user?.id,
            isLiked: newIsLiked,
        }

        updateLikesOnCommentAction(ideaId, comment._id, votesInfo);
    };

    return (
        <div className={`${comment.likes > 0 ? 'bg-[#272727] flex items-center rounded-full' : 'hover:bg-[#e8eaf02d] rounded-full'} py-0.5`}>
            {
                isLiked
                    ?
                    <p onClick={handleLiked} className="cursor-pointer py-1 px-3 rounded-l-xl hover:text-[#e8eaf0b2]">
                        <Image src={'/like-react.png'} alt="reactions" width={16} height={16} />
                    </p>
                    :
                    <p onClick={handleLiked} className="cursor-pointer px-3 hover:text-[#e8eaf0b2]">
                        <ThumbsUp color="#e8eaf0b2" size={16} />
                    </p>
            }

            {
                comment.likes > 0
                    ?
                    <span className="text-white pr-3">{comment.likes}</span>
                    :
                    ''
            }
        </div>
    );
};

export default VotesOnComment;