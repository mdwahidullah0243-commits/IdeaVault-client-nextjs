import { AlertDialog, Button } from "@heroui/react";

const AlertDialogForDelete = ({isDeleteOpen, setIsDeleteOpen}) => {
    return (
        <AlertDialog isOpen={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 bg-[#18181b]">
                        <AlertDialog.CloseTrigger />
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
                            <Button slot="close" variant="danger">
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