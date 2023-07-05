import pg from "pg";
const { Pool } = pg;

export async function initDB() {
    try {
        console.log("Connecting to postgres...")

        const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'momentum',
            password: 'example',
            port: 5432,
        })

        await pool.query('SELECT NOW() as now')

        console.log("Postgres connected!")
        
        return pool
    } catch (error) {
        throw error
    }
}