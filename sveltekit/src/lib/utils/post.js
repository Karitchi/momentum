import { getCookies, isUserConnected } from '$lib/utils/accountManagement'
import { redirect } from '@sveltejs/kit'
import { writeFile } from 'fs/promises';

export async function post(event) {

    if (! await isUserConnected(event)) throw redirect(300, '/login')

    const { userId } = await getCookies(event.cookies)

    const formData = await event.request.formData();
    const images = await formData.getAll("image")
    const caption = await formData.get("caption")

    let fileUUID, fileExt, url

    let text = `
        INSERT INTO posts (user_id, caption)
        VALUES ($1, $2)
        RETURNING post_id
    `
    let values = [userId, caption]

    const { rows } = await event.locals.pool.query(text, values)

    for (const image of images) {
        fileUUID = crypto.randomUUID()
        fileExt = image.name.split('.').pop();
        url = fileUUID + "." + fileExt

        // store file to fs
        writeFile(`./public/posts/${url}`, await image.stream());

        text = `
            INSERT INTO images (post_id, url)
            VALUES ($1, $2)
        `
        values = [rows[0].post_id, url]
        event.locals.pool.query(text, values)
    }
}

export async function getPosts(request) {

    const text = `
        SELECT  posts.post_id, posts.user_id, username, posts.caption, posts.created_at,
        JSON_AGG(images.url) AS urls
        FROM posts
        JOIN images ON posts.post_id = images.post_id
        JOIN users ON posts.user_id = users.user_id
        GROUP BY posts.post_id, users.username;
    `
    const { rows } = await request.locals.pool.query(text)

    return rows
}