import Link from "next/link";
import IdeaCard from "../shared/IdeaCard";
import { colors } from "@/lib/frontend-data";
import { getSortedIdeas } from "@/lib/backend-data";
import { Suspense } from "react";
import MyLoading from "../shared/MyLoading";

const TrendingIdeas = async () => {
    const ideas = await getSortedIdeas();

    return (
        <section className="w-11/12 sm:w-10/12 mx-auto py-15 px-8">
            <div className="flex justify-between flex-wrap max-sm:gap-5 items-end mb-8">
                <div>
                    <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">
                        Trending Now
                    </h3>
                    <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white">
                        Hot Ideas This Week
                    </h2>
                </div>

                <Link href={'/ideas'}>
                    <button className="hover:border-[#6C63FF] hover:text-[#6C63FF] bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-xl py-2.5 px-5.5 text-sm font-medium cursor-pointer transition-all duration-200">
                        View all →
                    </button>
                </Link>
            </div>

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
        </section>
    );
};

export default TrendingIdeas;