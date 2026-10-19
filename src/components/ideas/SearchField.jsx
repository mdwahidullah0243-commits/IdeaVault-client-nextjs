import { Input } from "@heroui/react";
import { TbDatabaseSearch } from "react-icons/tb";

const SearchField = ({search, setSearch, setFilteredBox}) => {
    const handleSearching = (event) => {
        setFilteredBox('searching');
        setSearch(event.target.value);
    };

    return (
        <div className="w-80 sm:w-100 relative font-medium">
            <TbDatabaseSearch color="#8a8f96" className="absolute top-[30%] left-[4%]" />

            <Input
                fullWidth
                value={search}
                onChange={handleSearching}
                className="placeholder:text-[#8a8f96] focus:border-[#6c63ff80] focus:bg-[#6c63ff14] bg-[#ffffff0f] border border-[#ffffff1a] rounded-xl py-2.5 pl-9 text-[#e8eaf0] text-sm outline-none transition-all duration-200"
                placeholder="Search ideas by title..."
            />
        </div>
    );
};

export default SearchField;