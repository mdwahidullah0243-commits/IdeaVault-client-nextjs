import { authClient } from '@/lib/auth-client';
import { Button, Modal, Surface, TextArea, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const EditComment = ({userId, isEditOpen, setIsEditOpen, commentId, text, ideaId, updateCommentAction }) => {
    const {data} = authClient.useSession();

    const user = data?.user;

    const handleEditCommentAction = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const modifiedCommentInfo = {
            ...Object.fromEntries(formData.entries()),
            userId: user?.id
        };

        if(user?.id !== userId) {
            toast.error('You are not valid user. So, you can not update this comment', {position: 'bottom-right'});
        };

        updateCommentAction(ideaId, commentId, modifiedCommentInfo);
    };

    return (
        <Modal.Backdrop isOpen={isEditOpen} onOpenChange={setIsEditOpen}>
            <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md bg-[#18181b]">
                    <Modal.CloseTrigger className='bg-[#47474d86] text-white hover:text-slate-300' />
                    <Modal.Header>
                        <Modal.Icon className="bg-[#47474d86] text-accent-soft-foreground">
                            <Image src={'/compose.png'} alt='edit' width={20} height={20} />
                        </Modal.Icon>
                        <Modal.Heading>Contact Us</Modal.Heading>
                        <p className="text-sm leading-5 text-slate-400">
                            Make changes to your comment and click Edit Comment to update it.
                        </p>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <Surface variant="default" className='bg-[#18181b]'>
                            <form onSubmit={handleEditCommentAction} className="flex flex-col gap-3 w-full rounded-3xl">
                                <TextField name="text" defaultValue={text} variant="secondary" aria-label='Write a comment'>
                                    <TextArea
                                        className="placeholder:text-slate-400 border-2 focus:border-[#0485f7] bg-[#2e2e30ad] text-slate-200 w-full max-h-50"
                                        placeholder="edit your comment/reply"
                                    />
                                </TextField>

                                <Button type='submit' slot='close' className='rounded-xl bg-[#079992] hover:bg-[#079992]/30'>
                                    Edit Comment
                                </Button>
                            </form>
                        </Surface>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    );
};

export default EditComment;