import Image from "next/image";

const PrivateSecureCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-3 hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <Image src={icon} alt={title} width={50} height={50} />

            <h2 className="mt-4 text-2xl font-semibold">
                {title}
            </h2>

            <p className="text-base font-medium text-[#e8eaf0b2]">
                {description}
            </p>
        </div>
    );
};

export default PrivateSecureCard;