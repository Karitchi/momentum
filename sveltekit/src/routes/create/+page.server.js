import { redirect, fail } from '@sveltejs/kit'
import { post } from '$lib/utils/post'
export const actions = {
    default: async (event) => {
        try {
            await post(event);
        } catch (error) {
            throw error
        }
        throw redirect(303, "/")
    }
}