import { initDB } from '$lib/utils/db'
import { isUserConnected } from '$lib/utils/accountManagement';
import { redirect } from '@sveltejs/kit';


export async function handle({ event, resolve }) {
    try {
        event.locals.pool = await initDB();
        event.locals.isUserConnected = await isUserConnected(event)

        if (event.url.pathname !== "/login" && event.url.pathname !== "/register") {
            if (!event.locals.isUserConnected) throw redirect(308, '/login')
        }
    } catch (error) {
        throw error
    }

    return await resolve(event);
}