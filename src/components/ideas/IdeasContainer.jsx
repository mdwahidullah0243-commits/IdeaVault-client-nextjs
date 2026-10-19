'use client';

import { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import SortingBox from "./SortingBox";
import CirclesWithBarLoading from "../shared/CirclesWithBarLoading";
import { getIdeasByCategory, getIdeasBySortingItem, searchIdeas } from "@/lib/backend-data";
import SearchField from "./SearchField";
import IdeasByCategory from "./IdeasByCategory";
import NoIdeasFound from "./NoIdeasFound";
import ErrorMessage from "./ErrorMessage";

const IdeasContainer = () => {
    const [category, setCategory] = useState('All');
    const [sortingItem, setSortingItem] = useState('Newest');
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredBox, setFilteredBox] = useState('category');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchIdeas = async () => {
            setLoading(true);
            setError(null);

            try {
                if (filteredBox === 'category') {
                    const data = await getIdeasByCategory(category, controller.signal)

                    if (!controller.signal.aborted) {
                        setIdeas(data);
                    }

                } else if (filteredBox === 'sorting') {
                    const data = await getIdeasBySortingItem(sortingItem, controller.signal)

                    if (!controller.signal.aborted) {
                        setIdeas(data);
                    }

                } else if (filteredBox === 'searching') {
                    const data = await searchIdeas(search, controller.signal)

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

    }, [category, sortingItem, filteredBox, debouncedSearch]);

    return (
        <>
            {/* Filters */}
            <div className="flex flex-col-reverse gap-5 xl:gap-0 xl:flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <CategoryBox setCategory={setCategory} setFilteredBox={setFilteredBox} />

                    <SortingBox setSortingItem={setSortingItem} setFilteredBox={setFilteredBox} />
                </div>

                <SearchField
                    search={search}
                    setSearch={setSearch}
                    setFilteredBox={setFilteredBox}
                />
            </div>

            {/* Ideas */}
            {
                loading ? (
                    <CirclesWithBarLoading />
                ) : error ? (
                    <ErrorMessage error={error} setCategory={setCategory} />
                ) : (
                    ideas.length === 0
                        ?
                        <NoIdeasFound onReset={() => setCategory('All')} />
                        :
                        <IdeasByCategory ideas={ideas} />
                )
            }
        </>
    );
};

export default IdeasContainer;