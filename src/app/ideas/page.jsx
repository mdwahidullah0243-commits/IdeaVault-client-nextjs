import Categories from "@/components/ideas/Categories";
import SearchField from "@/components/ideas/SearchField";
import IdeaCard from "@/components/shared/IdeaCard";
import MyLoading from "@/components/shared/MyLoading";
import { getIdeas } from "@/lib/backend-data";
import { colors } from "@/lib/frontend-data";
import { Suspense } from "react";

// export const instant = false;

const IdeasPage = async () => {
    const ideas = await getIdeas();

    return (
        <div className="w-9/12 mx-auto my-12 space-y-10">
            <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">Discover</h3>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-white">
                    Browse All Ideas
                </h1>
                <p className="text-[#6b7280] text-base">
                    Discover innovative startup concepts from our community
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col-reverse gap-5 xl:gap-0 xl:flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <Categories />

                    <Categories />
                </div>

                <SearchField />
            </div>

            {/* Ideas */}
            <Suspense fallback={<MyLoading />}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        ideas.map((idea, index) => (
                            <IdeaCard
                                key={idea._id}
                                idea={idea}
                                index={index}
                                color={colors[index % colors.length]}
                            />
                        ))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default IdeasPage;