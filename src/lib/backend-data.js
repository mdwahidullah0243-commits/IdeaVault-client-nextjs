export const getSortedIdeas = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

    return res.json();
};

export const getIdeaById = async (ideaId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea-details/${ideaId}`);

    return res.json();
};

export const getMyIdeas = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${userId}`);

    return res.json();
};

export const getIdeasByCategory = async (category, signal) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/idea-category/${encodeURIComponent(category)}`, {signal});
    
    return res.json();
};

export const getIdeasBySortingItem = async (sortingItem, signal) => {
    console.log('item:', sortingItem);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/sort/${encodeURIComponent(sortingItem)}`, {signal});
    
    return res.json();
};