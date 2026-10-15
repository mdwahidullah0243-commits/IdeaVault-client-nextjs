import { Input } from "@heroui/react";
import { TbDatabaseSearch } from "react-icons/tb";

const SearchField = () => {
    return (
        <div className="w-100 relative">
            <TbDatabaseSearch color="#4b5563" className="absolute top-[30%] left-[4%]" />

            <Input fullWidth className="placeholder:text-[#4b5563] focus:border-[#6c63ff80] focus:bg-[#6c63ff14] bg-[#ffffff0f] border border-[#ffffff1a] rounded-xl py-2.5 pl-9 text-[#e8eaf0] text-sm outline-none transition-all duration-200" placeholder="Search ideas..." />
        </div>
    );
};

export default SearchField;