import { Button, Input, Label, Modal, Surface, TextArea, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import RepliedCommentBox from './RepliedCommentBox';

const EditComment = ({ isEditOpen, setIsEditOpen }) => {
    return (
        <Modal.Backdrop isOpen={isEditOpen} onOpenChange={setIsEditOpen}>
            <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md bg-[#18181b]">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                            <Image src={'/compose.png'} alt='edit' width={20} height={20} />
                        </Modal.Icon>
                        <Modal.Heading>Contact Us</Modal.Heading>
                        <p className="mt-1.5 text-sm leading-5 text-muted">
                            Make changes to your comment and click Edit Comment to update it.
                        </p>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <Surface variant="default" className='bg-[#18181b]'>
                            <form className="flex flex-col gap-3 w-full rounded-3xl">
                                <TextField name="bio" variant="secondary">
                                    <TextArea className="bg-[#2e2e30ad] text-white w-full max-h-50" placeholder="Write a comment..." />
                                </TextField>

                                <Button slot='close' className='rounded-xl bg-[#079992]'>
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