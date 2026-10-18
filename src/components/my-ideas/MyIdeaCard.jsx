import { MessageCircleMore, ThumbsUp } from "lucide-react";
import Link from "next/link";
import UpdateYourIdea from "./UpdateYourIdea";
import AlertModalForDelete from "./AlertModalForDelete";

const MyIdeaCard = ({ idea, color }) => {
    return (
        <div className="bg-[#ffffff0a] border border-[#ffffff14] rounded-2xl p-5 flex flex-col xl:flex-row justify-between xl:items-center gap-4 hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] hover:-translate-y-1 transition-all duration-200 cursor-pointer">
            <div className="">
                <div className="inline-block py-1 px-3 rounded-lg text-xs font-semibold tracking-wider uppercase" style={{ background: `${color}18`, color: color, border: `1px solid ${color}30`, marginBottom: 8 }}>
                    {idea.category}
                </div>
                <h3 className="text-base font-bold text-[#e8eaf0]">
                    {idea.title}
                </h3>
            </div>

            <div className="flex items-center flex-wrap gap-3">
                <Link href={`/idea-details/${idea._id}`}>
                    <button className="bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-2 px-3.5 text-sm font-medium cursor-pointer transition-all duration-200 hover:border-[#6C63FF] hover:text-[#6C63FF]">
                        View Details
                    </button>
                </Link>

                <UpdateYourIdea />

                <AlertModalForDelete />
            </div>
        </div>
    );
};

export default MyIdeaCard;