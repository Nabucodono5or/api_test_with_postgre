import 'dotenv/config';
import process from 'process';
import { DataSource } from 'typeorm';
import { CreatePokemon1652275866232 } from './migrations/1652275866232-CreatePokemon';
import { CreateTrainer1652278489627 } from './migrations/1652278489627-CreateTreiner';

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    migrations: [CreatePokemon1652275866232, CreateTrainer1652278489627]
});

export default AppDataSource;
