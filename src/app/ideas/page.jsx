import Categories from "@/components/ideas/Categories";
import SearchField from "@/components/ideas/SearchField";
import IdeaCard from "@/components/shared/IdeaCard";
import { trendingIdeas } from "@/lib/data";

const IdeasPage = () => {
    return (
        <div className="w-9/12 mx-auto my-12 space-y-10">
            <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">Discover</h3>
                <h1 className="text-4xl font-bold tracking-[-0.02em] text-white">
                    Browse All Ideas
                </h1>
                <p className="text-[#6b7280] text-base">
                    Discover innovative startup concepts from our community
                </p>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Categories />

                    <Categories />
                </div>

                <SearchField />
            </div>

            {/* Ideas */}
            <div className="grid grid-cols-3 gap-8">
                {
                    trendingIdeas.map((idea, index) => (
                        <IdeaCard key={idea.id} idea={idea} index={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default IdeasPage;