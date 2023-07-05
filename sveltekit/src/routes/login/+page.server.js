import { login } from '$lib/utils/accountManagement'
import { redirect, fail } from '@sveltejs/kit'

export const actions = {
    default: async (event) => {
        try {
            await login(event)
        } catch (error) {
            if (error.status == "400") return fail(400, error.body.message)
            throw error
        }
        throw redirect(303, '/');
    }
}