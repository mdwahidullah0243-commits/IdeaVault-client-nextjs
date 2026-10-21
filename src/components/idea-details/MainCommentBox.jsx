import { createComment } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { Button, Form, Surface, TextArea, TextField } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MainCommentBox = async ({ idea }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const handleCreateCommentAction = async (formData) => {
        'use server'

        const commentData = {
            ...Object.fromEntries(formData.entries()),
            user: user?.name,
            avatar: user?.image,
            title: idea.title
        };

        return createComment(idea._id, user?.id, commentData);
    };

    return (
        <>
            <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">
                {
                    user?.image
                        ?
                        <Image
                            src={user?.image}
                            alt={user?.name}
                            width={80}
                            height={80}
                            className="w-full h-full rounded-full"
                        />
                        :
                        user?.name.split(' ').slice(0, 2).map(word => word[0]).join('')
                }
            </div>

            <Surface className="w-full rounded-3xl bg-[#18181b]">
                <Form action={handleCreateCommentAction} className="flex flex-col gap-3">
                    <TextField name="text" variant="secondary" aria-label="Write a comment">
                        <TextArea
                            className="placeholder:text-slate-400 border-2 focus:border-[#0485f7] bg-[#2e2e30ad] text-white w-full max-h-50"
                            placeholder="Write a comment..."
                        />
                    </TextField>

                    <Button type="submit" className='rounded-xl bg-indigo-600'>
                        Post Comment
                    </Button>
                </Form>
            </Surface>
        </>
    );
};

export default MainCommentBox;