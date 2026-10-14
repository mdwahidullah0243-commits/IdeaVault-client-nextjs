import { Button, Dropdown, Label } from "@heroui/react";
import { Ellipsis } from "lucide-react";
import AlertDialogForDelete from "./AlertDialogForDelete";
import { useState } from "react";
import EditComment from "./EditComment";

const ActionsMenu = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <>
            <Dropdown>
                <Button isIconOnly aria-label="More options" className='bg-transparent border border-slate-500 px-3 hover:bg-[#4b5563c7]'>
                    <Ellipsis />
                </Button>

                <Dropdown.Popover className='bg-[#0b0d14] border border-[#ffffff14]'>
                    <Dropdown.Menu>
                        <Dropdown.Item onAction={() => setIsEditOpen(true)} className="hover:bg-indigo-600 transition-all duration-200">
                            <Label className="text-slate-200">Edit</Label>
                        </Dropdown.Item>

                        <Dropdown.Item onAction={() => setIsDeleteOpen(true)} variant="danger" className="hover:bg-indigo-600 transition-all duration-200">
                            <Label>Delete</Label>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>

            <EditComment
                isEditOpen={isEditOpen}
                setIsEditOpen={setIsEditOpen}
            />

            <AlertDialogForDelete
                isDeleteOpen={isDeleteOpen}
                setIsDeleteOpen={setIsDeleteOpen}
            />
        </>
    );
};

export default ActionsMenu;