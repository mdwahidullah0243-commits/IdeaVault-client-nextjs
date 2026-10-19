import { categories } from "@/lib/frontend-data";
import { ListBox, Select } from "@heroui/react";

const CategoryBox = ({ setCategory, setFilteredBox }) => {
    const handleSelectCategory = (category) => {
        setFilteredBox('category');
        setCategory(category);
    };

    return (
        <Select className="w-40 sm:w-60" defaultValue='All'>
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
                        categories.map((category, index) => (
                            <ListBox.Item
                                key={index}
                                id={category}
                                textValue={category}
                                onClick={() => handleSelectCategory(category)}
                                className="hover:bg-indigo-600 transition-all duration-200"
                            >
                                {category}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))
                    }
                </ListBox>
            </Select.Popover>
        </Select>
    );
};

export default CategoryBox;