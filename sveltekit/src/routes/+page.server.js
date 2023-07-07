import { logout } from '$lib/utils/accountManagement'
import { redirect } from '@sveltejs/kit';


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


