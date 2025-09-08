import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { Enum } from '../../configs/enum';

const graphQlRouter = Router();

graphQlRouter.get("/", createProxyMiddleware({
      target: process.env.PAYLOAD_URL || Enum.PAYLOAD_URL,
      changeOrigin: true,
      pathRewrite: { "^/g": "/api/graphql" },
    }));

export default graphQlRouter;
