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

export default routers;
