import { redirect } from '@sveltejs/kit';
import { initDB } from '$lib/utils/db'
import { isUserConnected } from '$lib/utils/accountManagement';


const pool = await initDB()

export async function handle({ event, resolve }) {
    try {
        // reassign pool to event.locals.pool since event.locals get flushed
        event.locals.pool = pool

        event.locals.isUserConnected = await isUserConnected(event)
        if (event.url.pathname !== "/login" && event.url.pathname !== "/register") {
            if (!event.locals.isUserConnected) throw redirect(308, '/login')
        }
    } catch (error) {
        throw error
    }
    return await resolve(event);
}
