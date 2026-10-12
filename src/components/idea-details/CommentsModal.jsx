import { Modal } from "@heroui/react";
import { MessagesSquare } from "lucide-react";
import SortingBox from "./SortingBox";
import MainCommentBox from "./MainCommentBox";
import Comment from "./Comment";

const CommentsModal = () => {
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
                            <SortingBox />

                            {/* Actual Comments Info */}
                            <Comment />
                        </Modal.Body>

                        <Modal.Footer className="justify-start items-start">
                            <MainCommentBox />
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default CommentsModal;