import { sortingItems } from "@/lib/frontend-data";
import { ListBox, Select } from "@heroui/react";

const SortingBox = ({ setSortingItem, setFilteredBox}) => {
    const handleSelectSortingItem = (item) => {
        setFilteredBox('sorting');
        setSortingItem(item);
    }; 

    return (
        <Select className="w-40" defaultValue='Newest'>
            <Select.Trigger className="items-center focus:border-[#6c63ff80] focus:bg-[#6c63ff14] bg-[#ffffff0f] border border-[#ffffff1a] rounded-xl py-1 sm:py-2.5 pl-4 text-[#e8eaf0] text-sm outline-none transition-all duration-200">
                <Select.Value className='text-slate-200 font-medium'>
                    {({ isPlaceholder, defaultChildren, state }) =>
                        isPlaceholder
                            ? defaultChildren
                            : state.selectedItems?.textValue
                    }
                </Select.Value>
                <Select.Indicator className="text-[#6b7480] text-sm" />
            </Select.Trigger>

            <Select.Popover className='bg-[#0b0d14] border border-[#ffffff14]'>
                <ListBox>
                    {
                        sortingItems.map((item, index) => (
                            <ListBox.Item
                                key={index}
                                id={item}
                                textValue={item}
                                onClick={() => handleSelectSortingItem(item)}
                                className="hover:bg-indigo-600 transition-all duration-200"
                            >
                                {item}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))
                    }
                </ListBox>
            </Select.Popover>
        </Select>
    );
};

export default SortingBox;