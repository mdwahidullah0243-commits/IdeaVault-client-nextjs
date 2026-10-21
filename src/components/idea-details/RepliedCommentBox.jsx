import { authClient } from "@/lib/auth-client";
import { Button, Form, Surface, TextArea, TextField } from "@heroui/react";
import Image from "next/image";

const RepliedCommentBox = ({ parentId, parentUser, ideaId, createReplyAction, setIsReplyBox, setIsView }) => {
    const { data, isPending } = authClient.useSession();

    const user = data?.user;

    if (isPending) {
        return <p>Loading...</p>
    }

    const handleCreateReplyAction = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);

        const commentData = {
            ...Object.fromEntries(formData.entries()),
            user: user?.name,
            avatar: user?.image,
        };

        form.reset();
        
        setIsReplyBox(false);
        setIsView(true)

        return createReplyAction(ideaId, parentId, user?.id, commentData);
    };

    return (
        <div className="mt-3 flex gap-2">
            <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">
                {
                    user?.image
                        ?
                        <Image
                            src={user?.image}
                            alt={user?.name}
                            width={80}
                            height={80}
                            className="w-full rounded-full"
                        />
                        :
                        user?.name.split(' ').slice(0, 2).map(word => word[0]).join('')
                }
            </div>

            <Surface className="w-full rounded-3xl bg-[#18181b]">
                <Form onSubmit={handleCreateReplyAction} className="flex flex-row ">
                    <TextField name="text" aria-label="Write a comment" variant="secondary" className='flex-1'>
                        <TextArea
                            className="placeholder:text-slate-400 border-2 focus:border-[#0485f7] bg-[#2e2e30ad] text-slate-200 resize-none w-full max-h-50"
                            placeholder={`Reply to ${parentUser}`}
                        />
                    </TextField>

                    <Button type="submit" className="self-end bg-transparent cursor-pointer">
                        <Image
                            src={'/send-post.png'}
                            alt="Send"
                            width={40}
                            height={40}
                            className="hover:scale-110 transition-all duration-200"
                        />
                    </Button>
                </Form>
            </Surface>
        </div>
    );
};

export default RepliedCommentBox;