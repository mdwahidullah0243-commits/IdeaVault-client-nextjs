import Image from "next/image";
import Link from "next/link";

const IdeaCard = ({ idea, index, color }) => {
    const { imageUrl, title, category, shortDesc, author, avatar, avatarText } = idea;

    return (
        <div className="flex flex-col justify-between hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] hover:-translate-y-1 bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <div className="mb-4">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-40 rounded-xl"
                />
            </div>

            <div className="flex justify-between items-start mb-3">
                <div className="inline-block py-1 px-2.5 rounded-lg text-[12px] font-semibold tracking-wider uppercase" style={{ background: `${color}18`, color: color, border: `1px solid ${color}30` }}>
                    {category}
                </div>
                <span className="text-[12px] text-[#4b5563]">#{index + 1} trending</span>
            </div>

            <div className="mb-4 space-y-2">
                <h3 className="text-base font-bold text-[#e8eaf0]">
                    {title}
                </h3>

                <p className="text-sm font-medium text-[#e8eaf0b2]">
                    {shortDesc}
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-full flex items-center justify-center text-[12px] font-bold tracking-[0.03em] shrink-0" style={{ background: `${color}25`, color: color, width: 28, height: 28, fontSize: 10 }}>
                        {
                            avatar
                                ?
                                <Image
                                    src={avatar}
                                    alt={author}
                                    width={80}
                                    height={80}
                                    className="w-full rounded-full"
                                />
                                :
                                avatarText
                        }
                    </div>
                    <span className="text-[12px] text-[#6b7280]">
                        {author}
                    </span>
                </div>

                <Link href={`/idea-details/${idea._id}`}>
                    <button className="bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-3 px-3 sm:px-6 text-base font-medium cursor-pointer transition-all duration-200 hover:border-[#6C63FF] hover:text-[#6C63FF]">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default IdeaCard;