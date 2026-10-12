import { Surface, TextArea, TextField } from "@heroui/react";
import Image from "next/image";

const RepliedCommentBox = () => {
    return (
        <div className="mt-3 flex gap-2">
            <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">
                SM
            </div>

            <Surface className="flex flex-col gap-3 w-full rounded-3xl bg-[#18181b]">
                <TextField variant="secondary" className=''>
                    <TextArea
                        className="bg-[#2e2e30ad] text-slate-200 resize-none w-full max-h-50"
                        placeholder="Reply to Ratul"
                    />
                </TextField>
            </Surface>

            <Image
                src={'/send-post.png'}
                alt="Send"
                width={30}
                height={30}
                className="self-end cursor-pointer hover:scale-110 transition-all duration-200"
            />
        </div>
    );
};

export default RepliedCommentBox;