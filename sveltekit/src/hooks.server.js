import { initDB } from '$lib/utils/db'
import { isUserConnected } from '$lib/utils/accountManagement';


export async function handle({ event, resolve }) {
    try {
        event.locals.pool = await initDB();
        event.locals.isUserConnected = await isUserConnected(event)
    } catch (error) {
        throw error
    }

    return await resolve(event);
}