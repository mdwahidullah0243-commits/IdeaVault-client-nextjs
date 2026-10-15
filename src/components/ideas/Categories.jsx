import { ListBox, Select } from "@heroui/react";
import { BiSolidDownArrow } from "react-icons/bi";

const Categories = () => {
    return (
        <Select className="w-60" placeholder="All Categories">
            <Select.Trigger className="items-center focus:border-[#6c63ff80] focus:bg-[#6c63ff14] bg-[#ffffff0f] border border-[#ffffff1a] rounded-xl py-2.5 pl-4 text-[#e8eaf0] text-sm outline-none transition-all duration-200">
                <Select.Value />
                <BiSolidDownArrow color="#6b7280" />
            </Select.Trigger>
            
            <Select.Popover className='bg-[#0b0d14] border border-[#ffffff14]'>
                <ListBox>
                    <ListBox.Item id="florida" textValue="Florida" className="hover:bg-indigo-600 transition-all duration-200">
                        Florida
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="delaware" textValue="Delaware" className="hover:bg-indigo-600 transition-all duration-200">
                        Delaware
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="california" textValue="California" className="hover:bg-indigo-600 transition-all duration-200">
                        California
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="texas" textValue="Texas" className="hover:bg-indigo-600 transition-all duration-200">
                        Texas
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="new-york" textValue="New York" className="hover:bg-indigo-600 transition-all duration-200">
                        New York
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="washington" textValue="Washington" className="hover:bg-indigo-600 transition-all duration-200">
                        Washington
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </Select.Popover>
        </Select>
    );
};

export default Categories;