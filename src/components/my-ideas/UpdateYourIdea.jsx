import { FaEdit } from "react-icons/fa";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { MdBrowserUpdated } from "react-icons/md";
import { budgetRanges, categories } from "@/lib/data";

const UpdateYourIdea = () => {

    return (
        <div>
            <Modal>
                <Button className="hover:border-[#6C63FF] hover:text-[#6C63FF] bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-2.5 px-3.5 text-sm font-medium cursor-pointer transition-all duration-200">
                    <FaEdit size={16} /> Edit
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl bg-[#18181b]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <MdBrowserUpdated />
                                </Modal.Icon>
                                <Modal.Heading>Update Travel Package</Modal.Heading>
                                <p className="text-sm leading-5 text-muted">
                                    Make changes to the travel package details below
                                </p>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default" className="bg-[#272729] rounded-xl">
                                    <form className="p-10 space-y-8">
                                        {/* Idea title */}
                                        <TextField name="title" isRequired>
                                            <Label className="text-white">Idea Title</Label>
                                            <Input placeholder="Bali Paradise" className="rounded-2xl bg-[#201f1fbb]" />
                                            <FieldError />
                                        </TextField>

                                        {/* Short Description */}
                                        <TextField name="shortDesc" isRequired>
                                            <Label className="text-white">Short Description</Label>
                                            <Input placeholder="Indonesia" className="rounded-2xl bg-[#201f1fbb]" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <Select
                                            name="category"
                                            isRequired
                                            className="w-full"
                                            placeholder="Select category"
                                        >
                                            <Label className="text-white">Category</Label>
                                            <Select.Trigger className="rounded-2xl bg-[#201f1fbb]">
                                                <Select.Value />
                                                <Select.Indicator />
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
                                            isRequired
                                            className="w-full"
                                            placeholder="Select range"
                                        >
                                            <Label className="text-white">Estimated Budget</Label>
                                            <Select.Trigger className="rounded-2xl bg-[#201f1fbb]">
                                                <Select.Value />
                                                <Select.Indicator />
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
                                        <TextField name="audience" isRequired>
                                            <Label className="text-white">Target Audience</Label>
                                            <Input
                                                placeholder="e.g. Freelancers in South Asia"
                                                className="rounded-2xl bg-[#201f1fbb]"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Image URL - Removed preview */}
                                        <div>
                                            <TextField name="imageUrl" isRequired>
                                                <Label className="text-white">Cover Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://www.example.com/images/photo-1.png"
                                                    className="rounded-2xl bg-[#201f1fbb]"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Problem Statement */}
                                        <TextField name="problem" isRequired>
                                            <Label className="text-white">Problem Statement</Label>
                                            <TextArea
                                                placeholder="Describe the real problem your idea addresses ..."
                                                className="rounded-2xl bg-[#201f1fbb]"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Proposed Solution */}
                                        <TextField name="solution" isRequired>
                                            <Label className="text-white">Proposed Solution</Label>
                                            <TextArea
                                                placeholder="Walk us through your solution ..."
                                                className="rounded-2xl bg-[#201f1fbb]"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Detailed Description */}
                                        <TextField name="detailedDescription" isRequired>
                                            <Label className="text-white">Detailed Description</Label>
                                            <TextArea
                                                placeholder="Optional deeper dive into your idea ..."
                                                className="rounded-3xl bg-[#201f1fbb]"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Submit Section */}
                                        <div className="flex justify-end gap-3">
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                className='bg-[#079992]'
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