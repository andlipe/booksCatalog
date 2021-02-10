import express from 'express';
import './Database/connection';
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    return res.json({ message:  'teste' })
})

app.listen(3000);