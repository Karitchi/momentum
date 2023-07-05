import pg from "pg";
const { Pool } = pg;
import bcrypt from 'bcrypt'

export function initDB() {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'momentum',
        password: 'example',
        port: 5432,
    })

    return pool
}