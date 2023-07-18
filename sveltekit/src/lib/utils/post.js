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

    const fileUUID = crypto.randomUUID()
    const fileExt = image.name.split('.').pop();
    const imageURL = fileUUID + "." + fileExt

    // store file to fs
    writeFile(`./static/posts/${imageURL}`, await image.stream());

    let text = `
        INSERT INTO posts (user_id, caption)
        VALUES ($1, $2)
        RETURNING post_id
    `
    let values = [userId, caption]
    const { rows } = await event.locals.pool.query(text, values)
    console.log(rows)
    text = `
        INSERT INTO images (post_id, image_url)
        VALUES ($1, $2)
    `
    values = [rows[0].post_id, imageURL]

    event.locals.pool.query(text, values)
}

export async function getPosts(request) {

    const text = `
        SELECT user_id, caption, created_at, image_url
        FROM posts
        JOIN images ON posts.post_id = images.post_id
    `
    const { rows } = await request.locals.pool.query(text)
    return rows
}