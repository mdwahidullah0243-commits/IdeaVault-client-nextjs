import MyIdeaCard from "@/components/my-ideas/MyIdeaCard";
import { auth } from "@/lib/auth";
import { getMyIdeas } from "@/lib/backend-data";
import { colors } from "@/lib/frontend-data";
import { headers } from "next/headers";

const MyIdeasPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const myIdeas = await getMyIdeas(user.id);

    return (
        <section className="w-4/5 xl:w-3/5 mx-auto my-12">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#6C63FF] mb-2.5">Dashboard</h3>
            <h1 className="text-4xl font-bold tracking-[-0.02em] text-white">
                My Ideas
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5 mt-8">
                {
                    myIdeas.map((idea, index) => (
                        <MyIdeaCard
                            key={idea._id}
                            idea={idea}
                            color={colors[index % colors.length]}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default MyIdeasPage;