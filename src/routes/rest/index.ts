import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const restRouter = Router();

// Forward toàn bộ /r/* sang PayloadCMS REST API
restRouter.use(
  "/",
  createProxyMiddleware({
    target: process.env.PAYLOAD_URL,
    changeOrigin: true,
    pathRewrite: (path, req) => path.replace("/api/r", "/api"),
  }),
);

export default restRouter;
