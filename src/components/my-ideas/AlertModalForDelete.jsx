'use client';

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const AlertModalForDelete = ({ ideaId, deleteIdeaAction }) => {
    const handleDeleteIdeaAction = async () => {
        const res = await deleteIdeaAction(ideaId);

        if(res) {
            toast.success('Your idea is successfully removed from community!');

            redirect('/my-ideas')
        }
    }

    return (
        <AlertDialog>
            <Button className="bg-danger text-black rounded-[10px] py-2 px-3.5 text-sm font-medium cursor-pointer transition-all duration-200">
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 bg-[#18181b]">

                        <AlertDialog.CloseTrigger className="bg-white/30 hover:bg-white/20 text-slate-300" />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white">Delete permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p className="text-slate-300">
                                Are you sure you want to delete this idea? This action cannot be undone, and your idea will be permanently removed.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="outline" className='bg-[#27272a] text-white border-none'>
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteIdeaAction} slot="close" variant="danger">
                                Delete Idea
                            </Button>
                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default AlertModalForDelete;