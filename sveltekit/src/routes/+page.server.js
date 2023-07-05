import { logout } from '$lib/utils/accountManagement'
import { redirect } from '@sveltejs/kit';


export const actions = {
    default: async (event) => {
        try {
            await logout(event)
        } catch (error) {
            throw error
        }
        throw redirect(303, '/login')
    },
};


