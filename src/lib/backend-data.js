export const getSortedIdeas = async () => {
    const res = await fetch(`${process.env.SERVER_URL}`);
    
    return res.json();
};

export const getIdeas = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/ideas`);
    
    return res.json();
};