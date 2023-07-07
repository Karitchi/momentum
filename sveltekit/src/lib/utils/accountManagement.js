import { error } from '@sveltejs/kit'
import bcrypt from 'bcrypt'


async function getCookies(cookies) {
    const userId = cookies.get("user_id")
    const sessionId = cookies.get("session_id")

    return { userId, sessionId }
}

export async function isUserConnected(event) {

    const { userId, sessionId } = await getCookies(event.cookies)
    // const userId = await event.cookies.get("user_id")
    // const sessionId = await event.cookies.get("session_id")

    if (!sessionId || !userId) {
        return false
    }
    const text = `
    SELECT session_id 
    FROM users 
    WHERE user_id = $1
    `
    const values = [userId]
    const { rows } = await event.locals.pool.query(text, values)

    if (rows?.length < 1) {
        return false
    }

    const hashedSessionId = rows[0].session_id

    const isUserConnected = await bcrypt.compare(sessionId, hashedSessionId)
        .then(function (result) {
            return result
        })
        .catch((error) => {
            throw error
        })


    return isUserConnected
}

export async function register(request, cookies, locals) {
    // get form data
    const formData = await request.formData();
    const password = formData.get("password")
    const email = formData.get("email")

    if (email == "") throw new error(400, "Please enter an email")
    if (password == "") throw new error(400, "Please enter a password")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) throw new error(400, "Invalid email address fromat. Check your email and try again")
    // generate sessionId
    const sessionId = crypto.randomUUID();

    // hash password and sessionId
    const hashedPassword = await bcrypt.hash(password, 10).then(function (hash) {
        return hash
    });

    const hashedSessionId = await bcrypt.hash(sessionId, 10).then(function (hash) {
        return hash
    });

    // store hashed password and sessionId
    let text = 'INSERT INTO users (email, password, session_id, username) VALUES($1, $2, $3, $4) RETURNING * '
    let values = [email, hashedPassword, hashedSessionId, 'Thierry']

    const query = await locals.pool.query(text, values)

    // get userId
    const userId = query.rows[0].user_id

    // set non hashed sessionId cookie and userId cookie
    cookies.set('session_id', sessionId, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 604800
    });

    cookies.set('user_id', userId, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 604800
    });
}

async function getFormData(request) {
    const formData = await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")

    return { email, password }
}

export async function login(event) {
    const { email, password } = await getFormData(event.request)
    if (email == "") throw new error(400, "Please enter an email address and try again")
    if (password == "") throw new error(400, "Please enter a password and try again")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) throw new error(400, "Invalid email address fromat. Check your email and try again")

    // get user info
    let text = 'SELECT user_id, email, password FROM users WHERE email = $1'
    let values = [email]
    let { rows } = await event.locals.pool.query(text, values)

    if (rows.length < 1) throw new error(400, "This email address does not match any account. Please check your email address and try again or register a new account.")
    // check password
    const match = await bcrypt.compare(password, rows[0].password);
    if (!match) throw new error(400, "Invalid password. Please check your password and try again")

    const sessionId = crypto.randomUUID();
    const userId = rows[0].user_id

    const hashedSessionId = await bcrypt.hash(sessionId, 10)
        .then(
            function (hash) {
                return hash
            }
        )

    // add session id in db
    text = `
        UPDATE users 
        SET session_id = $1 
        WHERE user_id = $2;
        `
    values = [hashedSessionId, userId]
    event.locals.pool.query(text, values)

    // set cookies
    event.cookies.set('session_id', sessionId, {
        path: '/',
        maxAge: 604800
    });
    event.cookies.set('user_id', userId, {
        path: '/',
        maxAge: 604800
    });

}

export async function logout(event) {

    if (!await isUserConnected(event)) return

    const { userId } = getCookies(event.cookies)

    const text = `
        UPDATE users
        SET session_id = NULL
        WHERE user_id = $1;
    `
    const values = [userId]
    event.locals.pool.query(text, values)

    event.cookies.set("user_id", null, {
        path: '/',
        maxAge: 0
    })

    event.cookies.set("session_id", null, {
        path: '/',
        maxAge: 0
    })
}