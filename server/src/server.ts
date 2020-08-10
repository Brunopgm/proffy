import express from 'express';
import cors from 'cors'
import routes from './routes';


const app = express();

app.use(cors())
app.use(express.json()) //Por padrão o express não entende código json // add plugin express.json
app.use(routes)
app.listen(3333);

