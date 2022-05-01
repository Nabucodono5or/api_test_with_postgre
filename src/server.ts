import express, { Express } from 'express';

const app:Express = express();

app.listen(3000, () => console.log('server iniciado na porta 3000'));
