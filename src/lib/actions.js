import { revalidatePath } from "next/cache";

export const addIdea = async (formData, ideaData) => {
    'use server';

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-idea`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ideaData)
    });

    revalidatePath('/ideas');

    return await req.json();
};

export const updateIdea = async (modifiedIdeaInfo, ideaId) => {
    'use server';

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${ideaId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(modifiedIdeaInfo)
    });

    revalidatePath('/my-ideas');

    return await req.json();
};

export const deleteIdea = async (ideaId) => {
    'use server';

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${ideaId}`, {
        method: 'DELETE',
    });

    revalidatePath('/my-ideas');

    return await req.json();
};