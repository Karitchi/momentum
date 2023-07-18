import { logout } from '$lib/utils/accountManagement'
import { redirect } from '@sveltejs/kit';
import { getPosts } from '$lib/utils/post.js'



export const actions = {
    logout: async (event) => {
        try {
            await logout(event)
        } catch (error) {
            throw error
        }
        throw redirect(308, '/login')
    }
};

export async function load(request) {
    try {
        const posts = await getPosts(request)
        return { posts };
    } catch (error) {
        throw error
    }
}
