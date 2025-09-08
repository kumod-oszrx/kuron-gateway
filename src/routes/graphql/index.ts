import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const graphQlRouter = Router();

graphQlRouter.get("/", createProxyMiddleware({
      target: process.env.PAYLOAD_URL,
      changeOrigin: true,
      pathRewrite: (path, req) => path.replace("/api/g", "/api"),
    }));

export default graphQlRouter;
