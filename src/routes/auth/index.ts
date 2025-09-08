import { Router } from 'express';

import { loginController } from '../../controllers/login';
import { registerController } from '../../controllers/register';

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

export default authRouter;
