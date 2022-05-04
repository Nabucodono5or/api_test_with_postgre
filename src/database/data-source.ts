import 'dotenv/config';
import process from 'process';
import { DataSource } from 'typeorm';
import { CreateCategories1651598369597 } from './migrations/1651598369597-CreateCategories';

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: [CreateCategories1651598369597]
});

export default AppDataSource;
