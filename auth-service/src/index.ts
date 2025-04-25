import express from 'express';
import { router } from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/auth', router);

app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`);
});