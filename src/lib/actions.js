export const addIdea = async (formData, ideaData) => {
    'use server';

    const req = await fetch(`${process.env.SERVER_URL}/add-idea`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ideaData)
    });

    return await req.json();
};