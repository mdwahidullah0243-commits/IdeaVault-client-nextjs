'use client';

import { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import SortingBox from "./SortingBox";
import CirclesWithBarLoading from "../shared/CirclesWithBarLoading";
import { getIdeasByCategory, getIdeasBySortingItem } from "@/lib/backend-data";
import SearchField from "./SearchField";
import IdeasByCategory from "./IdeasByCategory";
import NoIdeasFound from "./NoIdeasFound";

const IdeasContainer = () => {
    const [category, setCategory] = useState('All');
    const [sortingItem, setSortingItem] = useState('Newest');
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCategory, setIsCategory] = useState(true);

    console.log({ isCategory, ideas });

    useEffect(() => {
        const controller = new AbortController();

        const fetchIdeas = async () => {
            setLoading(true);
            setError(null);

            try {
                if (isCategory) {
                    const data = await getIdeasByCategory(category, controller.signal)

                    if (!controller.signal.aborted) {
                        setIdeas(data);
                    }

                } else {
                    const data = await getIdeasBySortingItem(sortingItem, controller.signal)

                    if (!controller.signal.aborted) {
                        setIdeas(data);
                    }
                }
            } catch (error) {
                if (!controller.signal.aborted) {
                    setError(error.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchIdeas();

        return () => controller.abort();
    }, [category, sortingItem, isCategory]);

    return (
        <>
            {/* Filters */}
            <div className="flex flex-col-reverse gap-5 xl:gap-0 xl:flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <CategoryBox setCategory={setCategory} setIsCategory={setIsCategory} />

                    <SortingBox setSortingItem={setSortingItem} setIsCategory={setIsCategory} />
                </div>

                <SearchField />
            </div>

            {/* Ideas */}
            {
                loading ? (
                    <CirclesWithBarLoading />
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    ideas.length === 0
                        ?
                        <NoIdeasFound onReset={() => setCategory('all')} />
                        :
                        <IdeasByCategory ideas={ideas} />
                )
            }
        </>
    );
};

export default IdeasContainer;