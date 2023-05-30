import * as dotenv from 'dotenv';
import express from 'express';
import { router } from './Favourites/controller';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use('/favourites', router)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});