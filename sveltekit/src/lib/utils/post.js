import { getCookies, isUserConnected } from '$lib/utils/accountManagement'
import { error, redirect } from '@sveltejs/kit'
import { writeFile } from 'fs/promises';
import { path } from 'path'

export async function post(event) {
    if (! await isUserConnected(event)) throw redirect(300, '/login')

    const { userId } = await getCookies(event.cookies)

    const formData = await event.request.formData();
    const image = await formData.get("image")
    const caption = await formData.get("caption")

    console.log(image.name)
    const fileName = crypto.randomUUID()
    const fileExt = image.name.split('.').pop();


    // store file to fs
    writeFile(`./files/${fileName}.${fileExt}`, await image.stream());

    const text = `
        INSERT INTO posts (user_id, caption, image_url)
        VALUES ($1, $2, $3)
    `
    const values = [userId, caption, fileName]
    event.locals.pool.query(text, values)
}