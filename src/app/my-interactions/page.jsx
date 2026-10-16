import InteractionTabs from "@/components/my-interactions/InteractionTabs";

const MyInteractionsPage = () => {
    return (
        <div className="w-11/12 sm:w-9/12 mx-auto my-12 space-y-10">
            <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-white">
                    My Interactions
                </h1>
                <p className="text-[#6b7280] text-base">
                    View ideas you've liked and comments you've made.
                </p>
            </div>

            <InteractionTabs />
        </div>
    );
};

export default MyInteractionsPage;