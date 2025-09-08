import { Router } from 'express';

import authRouter from './auth';
import { graphqlRouter } from './graphql';
import { restRouter } from './rest';

const routers = Router();

routers.use("/r", restRouter);
routers.use("/g", graphqlRouter);
routers.use("/auth", authRouter);

// routers.get('/debug', async (req, res) => {
//   try {
//     const r = await axios.get(`${process.env.PAYLOAD_URL}/api/users`, { timeout: 10000 });
//     res.json({ ok: true, status: r.status });
//   } catch (e:any) {
//     res.status(500).json({ ok:false, message: e.message, code: e.code, stack: e.stack });
//   }
// });


export default routers;
