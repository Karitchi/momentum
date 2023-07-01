import { pool } from "../../../hooks.server";

export const GET = async () => {
    const response = await pool.query('select * from users')
    return new Response(JSON.stringify(response.rows))
};