import express from 'express';
import cors from 'cors';
import './Database/connection';
import routes from './routes';
import './containers';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000);