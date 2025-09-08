import { Router } from 'express';

import authRouter from './auth';
import router from './auth';
import graphqlRouter from './graphql';
import restRouter from './rest';

const routers = Router();

routers.use("/r", restRouter);
routers.use("/g", graphqlRouter);
router.use("/auth", authRouter);

export default routers;
