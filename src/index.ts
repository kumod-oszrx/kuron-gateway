import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { limiter } from './middleware/limiter';
import routers from './routes/init';

dotenv.config();

const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`KURON_GATEWAY IS ON - http://localhost:${PORT}`);
});
