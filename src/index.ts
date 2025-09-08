import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { Enum } from './configs/enum';
import { limiter } from './middleware/limiter';
import routers from './routes/init';

dotenv.config();

const app = express();

const PORT = process.env.PORT || Enum.PORT;

// middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}));
app.use(express.json());

// routes
app.use("/api", limiter, routers);

app.get("/", limiter, (req, res) => {
  return res.send("HELLO WORLD!");
});


app.listen(PORT, () => {
  console.log(`KURON_GATEWAY IS ON`);
});
