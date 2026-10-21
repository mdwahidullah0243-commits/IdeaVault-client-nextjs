'use client';

import { getVoteInfo } from "@/lib/backend-data";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const VotesOnIdea = ({ idea, updateVotesAction }) => {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchVote = async () => {
            const { message } = await getVoteInfo(idea._id, idea.userId);

            if (message) {
                setIsLiked(message);
            } else {
                setIsLiked(message)
            }
        };

        fetchVote();
    }, []);

    const { _id, userId, title, shortDesc } = idea;

    const handleVotes = () => {
        const newIsLiked = !isLiked;

        setIsLiked(newIsLiked);

        const votesInfo = {
            isLiked: newIsLiked,
            userId,
            title,
            shortDesc,
        };

        updateVotesAction(_id, votesInfo);
    };

    return (
        <div onClick={handleVotes} className="flex items-center gap-2 cursor-pointer text-[#e8eaf0b2] hover:bg-[#e8eaf02d] py-2 px-3 rounded-xl">
            {
                isLiked
                    ?
                    <Image src={'/like.png'} alt="like" width={30} height={30} />
                    :
                    <ThumbsUp />
            }
            <span>{idea.votes}</span>
        </div>
    );
};

export default VotesOnIdea;