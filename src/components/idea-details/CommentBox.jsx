import { Button, Modal, Popover, Surface, TextArea, TextField } from "@heroui/react";
import { MessagesSquare } from "lucide-react";
import { TiArrowSortedDown } from "react-icons/ti";

const CommentBox = () => {
    return (
        <Modal>
            <Modal.Trigger>
                <div className="flex items-center gap-2 cursor-pointer text-[#e8eaf0b2] hover:bg-[#e8eaf02d] py-2 px-3 rounded-xl">
                    <MessagesSquare />
                    <span>142</span>
                </div>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="max-w-170 bg-[#18181b]">
                        <Modal.CloseTrigger />
                        <Modal.Header className="border-b border-slate-300">
                            <Modal.Heading className="pb-2 text-white text-center text-xl font-semibold">
                                Mohammad's Post
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            {/* Sorting */}
                            <Popover>
                                <Button className='bg-transparent px-0 text-slate-200 text-sm font-semibold'>
                                    Most relevant
                                    <TiArrowSortedDown />
                                </Button>

                                <Popover.Content placement="left">
                                    <Popover.Dialog className="bg-[#18181b] rounded-xl">
                                        <Popover.Arrow className='border-[#18181b]' />
                                        <p className="text-sm">
                                            Left placement
                                        </p>
                                    </Popover.Dialog>
                                </Popover.Content>
                            </Popover>

                            <p>
                                A beautiful, fast, and modern React UI library for building accessible and
                                customizable web applications with ease.
                            </p>
                        </Modal.Body>

                        <Modal.Footer className="justify-start items-start">
                            <div className="flex items-center gap-2">
                                <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0 bg-[#6C63FF25] text-[#6C63FF]">SM</div>
                            </div>

                            <Surface className="flex flex-col gap-3 w-full rounded-3xl bg-[#18181b]">
                                <TextField name="bio" variant="secondary">
                                    <TextArea className="w-full max-h-50" placeholder="Write a comment..." />
                                </TextField>

                                <Button className='rounded-xl bg-indigo-600'>
                                    Post Comment
                                </Button>
                            </Surface>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default CommentBox;