'use client';

import { Button } from "@heroui/react";
import { Dot, Ellipsis, ThumbsDown, ThumbsUp } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import RepliedCommentBox from "./RepliedCommentBox";
import { useState } from "react";

const Comment = () => {
    const [isClicked, setIsClicked] = useState(false);
    console.log('isClicked:', isClicked);

    return (
        <div className="my-3 grid grid-cols-12 relative">

            {/* Draft: পুরো thread connector: খাড়া লাইন + নিচে rounded elbow */}
            <span className={`pointer-events-none absolute bottom-4.5 left-3.5 top-9 w-6 rounded-bl-xl border-b-2 border-l-2 border-[#2e2e30ad] dark:border-gray-600`} />

            <div className="col-span-9 flex gap-2">
                {/* Part-1 */}
                <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">
                    SM
                </div>

                {/* Part-2 */}
                <div className="space-y-1">
                    <div className="flex items-center gap-1 text-white">
                        <h3>Ona mika</h3>
                        <Dot />
                        <span>41m</span>
                    </div>

                    <p className="text-slate-200">
                        A beautiful, fast, and modern React UI library for building accessible and customizable web applications with ease.
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                        <span className="cursor-pointer hover:bg-[#e8eaf02d] py-1 px-2 rounded-xl hover:text-[#e8eaf0b2]">
                            <ThumbsUp size={16} />
                        </span>

                        <span className="cursor-pointer hover:bg-[#e8eaf02d] py-1 px-2 rounded-xl hover:text-[#e8eaf0b2]">
                            <ThumbsDown size={16} />
                        </span>

                        <span onClick={() => setIsClicked(true)} className="font-medium cursor-pointer hover:bg-[#e8eaf02d] hover:text-[#e8eaf0b2] py-1 px-3 rounded-xl">
                            Reply
                        </span>

                        <div className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[#e8eaf02d] hover:text-[#e8eaf0b2] py-1 px-3 rounded-xl">
                            <IoIosArrowDown />
                            <span>
                                View 5 reply
                            </span>
                        </div>
                    </div>

                    {
                        isClicked && <RepliedCommentBox />
                    }
                </div>
            </div>

            {/* Part-3 */}
            <div className="col-span-3 flex flex-col justify-between items-center">
                <Button isIconOnly aria-label="More options" className='bg-transparent border border-slate-500 px-3 hover:bg-[#4b5563c7]'>
                    <Ellipsis />
                </Button>
            </div>
        </div>
    );
};

export default Comment;