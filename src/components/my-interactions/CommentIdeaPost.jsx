import { format } from "date-fns";

const CommentIdeaPost = ({ idea }) => {
    return (
        <div className="hover:bg-[#6c63ff14] hover:border-[#6c63ff4d] hover:-translate-y-1 cursor-pointer transition-all duration-200 space-y-2 border border-slate-700 rounded-xl p-4">
            <p className="text-sm font-medium text-slate-500">
                {
                    format(new Date(), 'M/d/yyyy')
                }
            </p>

            <h2 className="text-base font-semibold text-slate-200">
                {idea.title}
            </h2>

            <p className="line-clamp-2 text-base font-semibold text-slate-400">
                {idea.shortDesc}
            </p>
        </div>
    );
};

export default CommentIdeaPost;