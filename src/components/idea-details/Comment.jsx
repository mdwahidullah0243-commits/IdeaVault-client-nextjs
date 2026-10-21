'use client';

import { Dot, ThumbsDown, ThumbsUp } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import RepliedCommentBox from "./RepliedCommentBox";
import { useState } from "react";
import Image from "next/image";
import ActionsMenu from "./ActionsMenu";
import { formatDistanceToNow } from "date-fns";
import VotesOnComment from "./VotesOnComment";

const Comment = ({ comment, isReply = false, isLast = true, shortDesc, createReplyAction, ideaId, ideaTitle, updateLikesOnCommentAction, updateCommentAction, deleteCommentAction }) => {
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
                        {
                            comment.avatar
                                ?
                                <Image
                                    src={comment.avatar}
                                    alt={comment.user}
                                    width={20}
                                    height={20}
                                    className="w-full h-full rounded-full"
                                />
                                :
                                comment.user.split(' ').slice(0, 2).map(word => word[0]).join('')
                        }
                    </div>

                    {/* Part-2 */}
                    <div className="space-y-1">
                        <div className="bg-[#1e2939] p-3 rounded-xl flex justify-between gap-12">
                            {/* Comment Info */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1 text-white">
                                    <h3>{comment?.user}</h3>
                                    <Dot className="max-sm:hidden" />
                                    <time dateTime={comment.createdAt}>
                                        {
                                            formatDistanceToNow(new Date(comment.createdAt), {
                                                addSuffix: true
                                            })
                                        }
                                    </time>
                                </div>

                                <p className="text-slate-200">
                                    {comment?.text}
                                </p>
                            </div>

                            {/* Actions */}
                            <ActionsMenu
                                comment={comment}
                                ideaId={ideaId}
                                userId={comment.userId}
                                updateCommentAction={updateCommentAction}
                                deleteCommentAction={deleteCommentAction}
                            />
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <VotesOnComment
                                ideaId={ideaId}
                                ideaTitle={ideaTitle}
                                shortDesc={shortDesc}
                                comment={comment}
                                updateLikesOnCommentAction={updateLikesOnCommentAction}
                            />

                            <button onClick={() => setIsReplyBox(!isReplyBox)} className="font-medium cursor-pointer hover:bg-[#e8eaf02d] text-[#e8eaf0b2] py-1 px-3 rounded-xl">
                                Reply
                            </button>

                            {/* Reply toggle: শুধু replies থাকলে */}
                            {
                                hasReplies && (
                                    <div
                                        onClick={() => setIsView(!isView)}
                                        className="cursor-pointer flex items-center gap-2 font-semibold hover:bg-[#e8eaf02d] text-[#e8eaf0b2] py-1 px-3 rounded-xl"
                                    >
                                        <IoIosArrowDown
                                            className={`transition-transform cursor-pointer ${isView ? "rotate-180" : ""}`}
                                        />
                                        <button className="cursor-pointer">
                                            {isView ? "Hide" : "View"} {comment.replies.length} reply
                                        </button>
                                    </div>
                                )
                            }
                        </div>

                        {/* Replied Comment Box */}
                        {
                            isReplyBox && <RepliedCommentBox
                                parentId={comment._id}
                                parentUser={comment.user}
                                createReplyAction={createReplyAction}
                                ideaId={ideaId}
                                ideaTitle={ideaTitle}
                                setIsReplyBox={setIsReplyBox}
                                setIsView={setIsView}
                            />
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
                                    createReplyAction={createReplyAction}
                                    ideaId={ideaId}
                                    ideaTitle={ideaTitle}
                                    updateLikesOnCommentAction={updateLikesOnCommentAction}
                                    updateCommentAction={updateCommentAction}
                                    deleteCommentAction={deleteCommentAction}
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