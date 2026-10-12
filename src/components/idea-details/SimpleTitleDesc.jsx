
const SimpleTitleDesc = ({ title, description }) => {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}:</h3>
            <p className="text-[15px] font-medium text-[#e8eaf0b2]">
                {description}
            </p>
        </div>
    );
};

export default SimpleTitleDesc;