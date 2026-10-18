export const getSortedIdeas = async () => {
    const res = await fetch(`${process.env.SERVER_URL}`);

    return res.json();
};

export const getIdeas = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/ideas`);

    return res.json();
};

export const getIdeaById = async (ideaId) => {
    const res = await fetch(`${process.env.SERVER_URL}/idea-details/${ideaId}`);

    return res.json();
};

export const getMyIdeas = async (userId) => {
    const res = await fetch(`${process.env.SERVER_URL}/my-ideas/${userId}`);

    return res.json();
};