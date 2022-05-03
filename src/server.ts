import express, { Express } from 'express';
import "reflect-metadata";
import AppDataSource from './database/data-source';

const app:Express = express();

AppDataSource.initialize().then(() => console.log("Conectado com êxito")).catch((err) => console.log("Error de conexão", err));

app.listen(3000, () => console.log('server iniciado na porta 3000'));
