import cors from 'cors';
import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Added curly braces around the options object
app.use(express.json({ extended: true })); // Added curly braces around the options object
app.use('/', routes);
const port = 8000;
Connection();
app.listen(port, () => console.log(`listening on port ${port}`));
