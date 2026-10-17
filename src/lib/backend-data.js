export const getIdeas = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/ideas`);
    
    return res.json();
};