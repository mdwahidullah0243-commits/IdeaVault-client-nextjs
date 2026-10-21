import { revalidatePath } from "next/cache";

export const addIdea = async (formData, ideaData, token) => {
    'use server';

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-idea`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
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

export const updateVotes = async (ideaId, votesInfo) => {
    'use server';

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea-details/${ideaId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(votesInfo)
    });

    revalidatePath(`/idea-details/${ideaId}`);
};

export const createComment = async (ideaId, userId, commentData, token) => {
    'use server';

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}/comments/${userId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(commentData)
    });

    revalidatePath(`/idea-details/${ideaId}`);
};

export const createReply = async (ideaId, parentId, userId, commentData, token) => {
    'use server';

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${ideaId}/comments/${parentId}/replies/${userId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(commentData)
    });

    revalidatePath(`/idea-details/${ideaId}`);
};

export const updateLikesOnComment = async (detailsId, commentId, votesInfo) => {
    'use server';

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${detailsId}/comment/${commentId}/liked`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(votesInfo)
    });

    revalidatePath(`/idea-details/${detailsId}`);
};

export const updateComment = async (detailsId, commentId, modifiedCommentInfo) => {
    'use server';

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${detailsId}/comment/${commentId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(modifiedCommentInfo)
    });

    revalidatePath(`/idea-details/${detailsId}`)
};

export const deleteComment = async (detailsId, commentId, userId) => {
    'use server';

    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${detailsId}/comment/${commentId}/user/${userId}`, {
        method: 'DELETE',
    });

    revalidatePath(`/idea-details/${detailsId}`)
};

export const updateProfile = async (userId, modifiedProfile) => {
    'use server';

    const res = fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/profile/edit/${userId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(modifiedProfile)
    });

    revalidatePath('/profile/edit');
}