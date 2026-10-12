'use client';

import { ListBox, Select } from "@heroui/react";
import { TiArrowSortedDown } from "react-icons/ti";

const SortingBox = () => {
    return (
        <Select defaultValue='all-comments' className="w-40" placeholder="All comments">
            <Select.Trigger className="items-center focus:border-[#6c63ff80] focus:bg-[#6c63ff14] bg-[#ffffff0f] border border-[#ffffff1a] rounded-xl py-2.5 pl-4 text-[#e8eaf0] text-sm outline-none transition-all duration-200">
                
                <Select.Value>
                    {({ isPlaceholder, defaultChildren, state }) =>
                        isPlaceholder
                            ? defaultChildren
                            : state.selectedItems[0]?.textValue
                    }
                </Select.Value>

                {/* <Select.Indicator /> */}
                <TiArrowSortedDown />

            </Select.Trigger>

            <Select.Popover className='bg-[#0b0d14] border border-[#ffffff14]'>
                <ListBox>
                    <ListBox.Item id="relevant" textValue="Most relevant" className="hover:bg-indigo-600 transition-all duration-200">
                        <div className="">
                            <h3>Most relevant</h3>
                            <p className="hover:text-black text-[12px] font-medium text-[#4b5563]">Show friends' comments and the most engaging comments first</p>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="newest" textValue="Newest" className="hover:bg-indigo-600 transition-all duration-200">
                        <div className="">
                            <h3>Newest</h3>
                            <p className="hover:text-black text-[12px] font-medium text-[#4b5563]">
                                Show all comments with the newest comments first.
                            </p>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="all-comments" textValue="All Comments" className="hover:bg-indigo-600 transition-all duration-200">
                        <div className="">
                            <h3>All comments</h3>
                            <p className="hover:text-black text-[12px] font-medium text-[#4b5563]">
                                Show all comments, including potential spam.
                            </p>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </Select.Popover>
        </Select>
    );
};

export default SortingBox;