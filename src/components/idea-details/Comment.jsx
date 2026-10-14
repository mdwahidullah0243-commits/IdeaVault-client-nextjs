'use client';

import { Button } from "@heroui/react";
import { Dot, Ellipsis, ThumbsDown, ThumbsUp } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import RepliedCommentBox from "./RepliedCommentBox";
import { useState } from "react";
import Image from "next/image";
import ActionsMenu from "./ActionsMenu";

const Comment = ({ comment, isReply = false, isLast = true }) => {
    const [isView, setIsView] = useState(false);
    const [isReplyBox, setIsReplyBox] = useState(false);

    const hasReplies = comment.replies?.length > 0;

    return (
        <li className={`relative list-none ${isReply ? "pl-7" : ""}`}>
            {/* 2. Elbow: reply-এর জন্য "L" আকৃতির বাঁকানো লাইন */}
            {
                isReply && (
                    <span
                        className={`absolute left-0 top-0 h-5 w-6 rounded-bl-xl border-b-2 border-l-2 border-gray-700 dark:border-gray-700`}
                    />
                )
            }

            {/* 3. Continuation: শেষ reply না হলে লাইন নিচে চলতে থাকবে */}
            {
                isReply && !isLast && (
                    <span
                        className={`absolute -bottom-5 left-0 top-5 border-l-2 border-gray-700 dark:border-gray-700`}
                    />
                )
            }

            {/* Comment row */}
            <div className="my-3 flex gap-2 relative">
                {/* 1. Parent-এর avatar থেকে replies পর্যন্ত vertical লাইন */}
                {
                    hasReplies && isView && (
                        <span
                            className={`absolute -bottom-3.5 left-4.75 top-10 border-l-2 border-gray-700 dark:border-gray-700`}
                        />
                    )
                }

                <div className="flex gap-2">
                    {/* Part-1 */}
                    <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">
                        <Image
                            src={comment.avatar}
                            alt={comment.user}
                            width={20}
                            height={20}
                            className="w-full h-full rounded-full"
                        />
                    </div>

                    {/* Part-2 */}
                    <div className="space-y-1">
                        <div className="bg-[#1e2939] p-3 rounded-xl flex justify-between gap-12">
                            {/* Comment Info */}
                            <div>
                                <div className="flex items-center gap-1 text-white">
                                    <h3>{comment.user}</h3>
                                    <Dot />
                                    <span>{comment.timeStamp}</span>
                                </div>

                                <p className="text-slate-200">
                                    {comment.text}
                                </p>
                            </div>

                            {/* Actions */}
                            <ActionsMenu />
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                            <span className="cursor-pointer hover:bg-[#e8eaf02d] py-1 px-2 rounded-xl hover:text-[#e8eaf0b2]">
                                <ThumbsUp size={16} />
                            </span>

                            <span className="cursor-pointer hover:bg-[#e8eaf02d] py-1 px-2 rounded-xl hover:text-[#e8eaf0b2]">
                                <ThumbsDown size={16} />
                            </span>

                            <span onClick={() => setIsReplyBox(!isReplyBox)} className="font-medium cursor-pointer hover:bg-[#e8eaf02d] hover:text-[#e8eaf0b2] py-1 px-3 rounded-xl">
                                Reply
                            </span>

                            {/* Reply toggle: শুধু replies থাকলে */}
                            {
                                hasReplies && (
                                    <div
                                        onClick={() => setIsView(!isView)}
                                        className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#e8eaf02d] hover:text-[#e8eaf0b2] py-1 px-3 rounded-xl"
                                    >
                                        <IoIosArrowDown
                                            className={`transition-transform ${isView ? "rotate-180" : ""}`}
                                        />
                                        <span>
                                            {isView ? "Hide" : "View"} {comment.replies.length} reply
                                        </span>
                                    </div>
                                )
                            }
                        </div>

                        {/* Replied Comment Box */}
                        {
                            isReplyBox && <RepliedCommentBox />
                        }
                    </div>
                </div>
            </div>

            {/* Nested replies (recursive) */}
            {
                hasReplies && isView && (
                    <ul className="ml-4.75">
                        {
                            comment.replies.map((reply, i) => (
                                <Comment
                                    key={reply.id}
                                    comment={reply}
                                    isReply
                                    isLast={i === comment.replies.length - 1}
                                />
                            ))
                        }
                    </ul>
                )
            }
        </li>
    );
};

export default Comment;