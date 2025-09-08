import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { Enum } from '../../configs/enum';

const restRouter = Router();

const proxyMiddlware = createProxyMiddleware({
  target: process.env.PAYLOAD_URL || Enum.PAYLOAD_URL,
  changeOrigin: true,
  pathRewrite: { "^/api/r": "/api" },
})

// Forward toàn bộ /r/* sang PayloadCMS REST API
restRouter.use(
  "/",
  proxyMiddlware,
);

export default restRouter;
