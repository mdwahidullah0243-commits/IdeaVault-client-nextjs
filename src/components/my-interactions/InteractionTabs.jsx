import { listClassName, listClassName2, trendingIdeas } from "@/lib/data";
import { Tabs } from "@heroui/react";
import CommentIdeaPost from "./CommentIdeaPost";

const InteractionTabs = () => {
    return (
        <Tabs className="w-full">
            <Tabs.ListContainer className="max-w-sm rounded-none bg-transparent">
                <Tabs.List aria-label="Idea interactions" className={listClassName}>
                    <Tabs.Tab id="comments">
                        Comments ({trendingIdeas.length})
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="liked">
                        Liked
                        <Tabs.Indicator />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>

            <Tabs.Panel className="pt-3 text-sm text-muted" id="comments">
                <div className="grid grid-cols-2 gap-4">
                    {
                        trendingIdeas.map(idea => (
                            <CommentIdeaPost key={idea.id} idea={idea} />
                        ))
                    }
                </div>
            </Tabs.Panel>

            <Tabs.Panel className="pt-3 text-sm text-muted" id="liked">
                View your project overview and recent activity.
            </Tabs.Panel>
        </Tabs>
    );
};

export default InteractionTabs;