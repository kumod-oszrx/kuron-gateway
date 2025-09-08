import axios from 'axios';
import { Router } from 'express';

import { Enum } from '../configs/enum';
import authRouter from './auth';

const routers = Router();

routers.use("/r", async (req, res) => {
    // console.log(req.path); // log is /users for call localhost:5000/api/r/users
    const url = `${process.env.PAYLOAD_URL || Enum.PAYLOAD_URL}/api${req.path}`;
    const response = await axios.request({
        method: req.method,
        url,
        headers: req.headers,
        data: req.body,
    })
    res.send(response.data);
});
routers.use("/g", async (req, res) => {
    console.log(req.path);
    const url = `${process.env.PAYLOAD_URL || Enum.PAYLOAD_URL}/api/graphql${req.path}`;
    const response = await axios.request({
        method: req.method,
        url,
        headers: req.headers,
        data: req.body,
    })
    res.send(response.data);
    // res.send(req.path)
});
routers.use("/auth", authRouter);

routers.get('/debug', async (req, res) => {
  try {
    const r = await axios.get(`${process.env.PAYLOAD_URL}/api/users`, { timeout: 10000 });
    res.json({ ok: true, status: r.status });
  } catch (e:any) {
    res.status(500).json({ ok:false, message: e.message, code: e.code, stack: e.stack });
  }
});


export default routers;
