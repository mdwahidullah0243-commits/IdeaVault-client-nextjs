import MyIdeaCard from "@/components/my-ideas/MyIdeaCard";
import { ideas } from "@/lib/frontend-data";

const MyIdeasPage = () => {
    return (
        <section className="w-4/5 xl:w-3/5 mx-auto my-12">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">Dashboard</h3>
            <h1 className="text-4xl font-bold tracking-[-0.02em] text-white">
                My Ideas
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5 mt-8">
                {
                    ideas.slice(0, 3).map((idea) => (
                        <MyIdeaCard key={idea.id} idea={idea} />
                    ))
                }
            </div>
        </section>
    );
};

export default MyIdeasPage;