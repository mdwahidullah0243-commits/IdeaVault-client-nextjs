import { colors } from "@/lib/frontend-data";
import IdeaCard from "../shared/IdeaCard";

const IdeasByCategory = ({ ideas }) => {

    return (
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
    );
};

export default IdeasByCategory;