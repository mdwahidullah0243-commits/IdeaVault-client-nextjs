import { ideas, listClassName } from "@/lib/frontend-data";
import { Tabs } from "@heroui/react";
import InteractionCard from "./InteractionCard";
import { getCommentsByUserId, getLikesByUserId } from "@/lib/backend-data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import EmptyInteractions from "./EmptyInteractions";

const InteractionTabs = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const comments = await getCommentsByUserId(user?.id);
    const likes = await getLikesByUserId(user?.id);

    return (
        <Tabs className="w-full">
            <Tabs.ListContainer className="max-w-sm rounded-none bg-transparent">
                <Tabs.List aria-label="Idea interactions" className={listClassName}>
                    <Tabs.Tab id="comments">
                        Comments ({comments.length})
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="liked">
                        Liked ({likes.length})
                        <Tabs.Indicator />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>

            <Tabs.Panel className="pt-3 text-sm text-muted" id="comments">
                {
                    comments.length === 0
                        ?
                        <EmptyInteractions />
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                comments.map(comment => (
                                    <InteractionCard key={comment._id} interaction={comment} />
                                ))
                            }
                        </div>
                }
            </Tabs.Panel>

            <Tabs.Panel className="pt-3 text-sm text-muted" id="liked">
                {
                    comments.length === 0
                        ?
                        <EmptyInteractions />
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                likes.map(liked => (
                                    <InteractionCard key={liked._id} interaction={liked} />
                                ))
                            }
                        </div>
                }
            </Tabs.Panel>
        </Tabs>
    );
};

export default InteractionTabs;