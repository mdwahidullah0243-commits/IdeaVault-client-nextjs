import { Button, Surface, TextArea, TextField } from "@heroui/react";

const MainCommentBox = () => {
    return (
        <>
            <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">
                SM
            </div>

            <Surface className="flex flex-col gap-3 w-full rounded-3xl bg-[#18181b]">
                <TextField name="bio" variant="secondary">
                    <TextArea className="bg-[#2e2e30ad] w-full max-h-50" placeholder="Write a comment..." />
                </TextField>

                <Button className='rounded-xl bg-indigo-600'>
                    Post Comment
                </Button>
            </Surface>
        </>
    );
};

export default MainCommentBox;