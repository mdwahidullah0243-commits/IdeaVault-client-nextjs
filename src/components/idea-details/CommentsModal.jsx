import { Modal } from "@heroui/react";
import { MessagesSquare } from "lucide-react";
import SortingBox from "./SortingBox";
import MainCommentBox from "./MainCommentBox";
import Comment from "./Comment";
import EmptyComments from "./EmptyComments";
import { getComments } from "@/lib/backend-data";
import { createReply, deleteComment, updateComment, updateLikesOnComment } from "@/lib/actions";

const CommentsModal = async ({ idea }) => {
    const comments = await getComments(idea._id);

    return (
        <Modal>
            <Modal.Trigger>
                <div className="flex items-center gap-2 cursor-pointer text-[#e8eaf0b2] hover:bg-[#e8eaf02d] py-2 px-3 rounded-xl">
                    <MessagesSquare />
                    <span>{idea.comments}</span>
                </div>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="max-w-170 bg-[#18181b]">
                        <Modal.CloseTrigger className="text-white" />
                        <Modal.Header className="border-b border-slate-300">
                            <Modal.Heading className="pb-2 text-white text-center text-lg sm:text-xl font-semibold">
                                {`${idea.author.split(' ')[0]}'s Post`}
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            {
                                comments.length === 0
                                    ?
                                    <EmptyComments />
                                    :
                                    <>
                                        {/* Sorting */}
                                        <SortingBox />

                                        {/* Actual Comments Info */}
                                        <ul className="space-y-1">
                                            {
                                                comments.map((c) => (
                                                    <Comment
                                                        key={c.id}
                                                        comment={c}
                                                        ideaId={idea._id}
                                                        ideaTitle={idea.title}
                                                        shortDesc={idea.shortDesc}
                                                        createReplyAction={createReply}
                                                        updateLikesOnCommentAction={updateLikesOnComment}
                                                        updateCommentAction={updateComment}
                                                        deleteCommentAction={deleteComment}
                                                    />
                                                ))
                                            }
                                        </ul>
                                    </>
                            }
                        </Modal.Body>

                        <Modal.Footer className="justify-start items-start">
                            <MainCommentBox idea={idea} />
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default CommentsModal;