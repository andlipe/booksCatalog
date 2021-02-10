import express from 'express';
import './Database/connection';
import routes from './routes';
const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    return res.json({ message:  'teste' })
});

app.listen(3000);