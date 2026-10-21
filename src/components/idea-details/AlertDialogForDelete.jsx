import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

const AlertDialogForDelete = ({ userId, isDeleteOpen, setIsDeleteOpen, deleteCommentAction, ideaId, commentId }) => {
    const { data } = authClient.useSession();

    const user = data?.user;

    const handleDeleteCommentAction = () => {
        if(user?.id !== userId) {
            return toast.error('You are not valid user. So, you can not delete this comment', {position: 'bottom-right'});
        }

        deleteCommentAction(ideaId, commentId, user?.id)
    };

    return (
        <AlertDialog isOpen={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 bg-[#18181b]">
                        <AlertDialog.CloseTrigger className='bg-[#47474d86] text-white hover:text-slate-300' />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white">Delete permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-300">
                                Are you sure you want to delete this comment?
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline" className='bg-[#27272a] text-white border-none'>
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteCommentAction} slot="close" variant="danger">
                                Delete Comment
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default AlertDialogForDelete;