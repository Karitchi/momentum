import { redirect } from '@sveltejs/kit';
import { register } from '$lib/utils/accountManagement'

export const actions = {
    default: async ({ cookies, request, locals }) => {
        try {
            await register(request, cookies, locals)
        } catch (error) {
            throw error
        }
        throw redirect(303, '/');
    }
};