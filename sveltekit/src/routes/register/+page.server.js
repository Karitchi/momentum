import { register } from '$lib/utils/accountManagement'
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, request, locals }) => {
        try {
            await register(request, cookies, locals)
        } catch (error) {
            if (error.code === "23505") return fail(400, "An account with this email address already exists.");
            else if (error.status === 400) return fail(400, error.body.message)

            throw error
        }
        throw redirect(303, '/');
    }
};