
const WorkCard = ({icon, title, description}) => {
    return (
        <div className="space-y-4 hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <button className="btn btn-ghost">
                {icon}
            </button>

            <h2 className="text-2xl font-semibold">
                {title}
            </h2>

            <p className="text-base font-medium text-[#e8eaf0b2]">
                {description}
            </p>
        </div>
    );
};

export default WorkCard;