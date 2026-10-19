'use client';

import { FaEdit } from "react-icons/fa";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { MdBrowserUpdated } from "react-icons/md";
import { budgetRanges, categories } from "@/lib/frontend-data";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { redirect } from "next/navigation";

const UpdateYourIdea = ({ idea, updateIdeaAction }) => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        setDate(new Date());
    }, []);

    const { _id, title, shortDesc, detailedDesc, category, budget, problem, solution, imageUrl, audience } = idea;

    const handleUpdateIdeaAction = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const modifiedIdeaInfo = {
            ...Object.fromEntries(formData.entries()),
            date: date ? format(new Date(), 'yyyy-M-d') : ''
        };

        const res = await updateIdeaAction(modifiedIdeaInfo, _id);

        if (res.modifiedCount > 0) {
            toast.success(`${title} - your idea is successfully modified!`);
            
            redirect('/my-ideas');
        };
    };

    return (
        <div>
            <Modal>
                <Button className="hover:border-[#6C63FF] hover:text-[#6C63FF] bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-2.5 px-3.5 text-sm font-medium cursor-pointer transition-all duration-200">
                    <FaEdit size={16} /> Edit
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl bg-[#101828]">
                            <Modal.CloseTrigger className="bg-white/30 hover:bg-white/20 text-slate-300" />
                            <Modal.Header className="gap-2">
                                <Modal.Icon className="bg-[#27272a] text-white">
                                    <MdBrowserUpdated className="" />
                                </Modal.Icon>
                                <Modal.Heading>Update Travel Package</Modal.Heading>
                                <p className="text-sm leading-5 text-slate-300">
                                    Make changes to the travel package details below
                                </p>
                            </Modal.Header>

                            <Modal.Body className="p-3 sm:p-6">
                                <Surface variant="default" className="bg-[#1e2939] rounded-xl">
                                    <form onSubmit={handleUpdateIdeaAction} className="p-5 sm:p-10 space-y-8">
                                        {/* Idea title */}
                                        <TextField name="title" defaultValue={title} isRequired>
                                            <Label className="text-white">Idea Title</Label>
                                            <Input placeholder="Type your idea title" className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70" />
                                            <FieldError />
                                        </TextField>

                                        {/* Short Description */}
                                        <TextField name="shortDesc" defaultValue={shortDesc} isRequired>
                                            <Label className="text-white">Short Description</Label>
                                            <Input placeholder="Short description for your idea" className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <Select
                                            name="category"
                                            defaultValue={category}
                                            isRequired
                                            className="w-full"
                                            placeholder="Select category"
                                        >
                                            <Label className="text-white">Category</Label>
                                            <Select.Trigger className="bg-[#2a3546] text-slate-300 border-2 rounded-xl focus:border-[#10ac84]/70">
                                                <Select.Value className='data-placeholder:text-white/30' />
                                                <Select.Indicator className="text-white/30" />
                                            </Select.Trigger>
                                            <Select.Popover className='bg-[#1a1d2e]'>
                                                <ListBox>
                                                    {
                                                        categories.map((c, i) => (
                                                            <ListBox.Item key={i} id={c} textValue={c} className="hover:bg-indigo-600 transition-all duration-200">
                                                                {c}
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        ))
                                                    }
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Budget Ranges - Updated Select Component */}
                                        <Select
                                            name="budget"
                                            defaultValue={budget}
                                            isRequired
                                            className="w-full"
                                            placeholder="Select range"
                                        >
                                            <Label className="text-white">Estimated Budget</Label>
                                            <Select.Trigger className="bg-[#2a3546] text-slate-300 border-2 rounded-xl focus:border-[#10ac84]/70">
                                                <Select.Value className='data-placeholder:text-white/30' />
                                                <Select.Indicator className="text-white/30" />
                                            </Select.Trigger>
                                            <Select.Popover className='bg-[#1a1d2e]'>
                                                <ListBox>
                                                    {
                                                        budgetRanges.map((c, i) => (
                                                            <ListBox.Item key={i} id={c} textValue={c} className="hover:bg-indigo-600 transition-all duration-200">
                                                                {c}
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        ))
                                                    }
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>

                                        {/* Target Audience */}
                                        <TextField name="audience" defaultValue={audience} isRequired>
                                            <Label className="text-white">Target Audience</Label>
                                            <Input
                                                placeholder="e.g. Freelancers in South Asia"
                                                className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Image URL - Removed preview */}
                                        <div>
                                            <TextField name="imageUrl" defaultValue={imageUrl} isRequired>
                                                <Label className="text-white">Cover Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://www.example.com/images/photo-1.png"
                                                    className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Problem Statement */}
                                        <TextField name="problem" defaultValue={problem} isRequired>
                                            <Label className="text-white">Problem Statement</Label>
                                            <TextArea
                                                placeholder="Describe the real problem your idea addresses ..."
                                                className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Proposed Solution */}
                                        <TextField name="solution" defaultValue={solution} isRequired>
                                            <Label className="text-white">Proposed Solution</Label>
                                            <TextArea
                                                placeholder="Walk us through your solution ..."
                                                className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Detailed Description */}
                                        <TextField name="detailedDesc" defaultValue={detailedDesc} isRequired>
                                            <Label className="text-white">Detailed Description</Label>
                                            <TextArea
                                                placeholder="Optional deeper dive into your idea ..."
                                                className="bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-xl focus:border-[#10ac84]/70"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Submit Section */}
                                        <div className="flex justify-end gap-3">
                                            <Button slot="close" className='bg-[#68687479] hover:bg-[#68687479]/30 text-white'>
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                slot='close'
                                                className='bg-[#079992] hover:bg-[#079992]/30'
                                            >
                                                Save Changes
                                            </Button>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default UpdateYourIdea;