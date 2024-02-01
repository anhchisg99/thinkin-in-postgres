import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'thinkin',
    password: 'haivlk123',
    port: '5432' // Default PostgreSQL port is 5432
});

export default pool