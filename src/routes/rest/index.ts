import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const restRouter = Router();

// Forward toàn bộ /r/* sang PayloadCMS REST API
restRouter.use(
  "/",
  createProxyMiddleware({
    target: process.env.PAYLOAD_URL,
    changeOrigin: true,
    pathRewrite: { "^/r": "/api" }, // /r/posts -> /api/posts
  }),
);

export default restRouter;
