import express from 'express';
import cors from 'cors';
import '../typeorm/connection';
import routes from './routes';
import '@shared/containers';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000);