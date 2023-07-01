import { Pool } from 'pg'

export function connect() {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'momentum',
        password: 'example',
        port: 5432,
    })
    console.log("postgres connected!")
    return pool
}