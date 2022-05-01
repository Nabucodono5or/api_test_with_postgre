import express, { Express } from 'express';
import "reflect-metadata";

const app:Express = express();

app.listen(3000, () => console.log('server iniciado na porta 3000'));
