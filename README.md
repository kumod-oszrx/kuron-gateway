# Kuron Gateway

This is an API Gateway built with Express.js that acts as a reverse proxy for various backend services. It is configured to handle REST and GraphQL requests and forward them to a downstream service, such as a PayloadCMS instance.

## Features

- **Reverse Proxy**: Forwards incoming requests to the appropriate backend services.
- **REST & GraphQL**: Supports both REST (`/api/r`) and GraphQL (`/api/g`) endpoints.
- **Rate Limiting**: Basic rate-limiting is implemented to prevent abuse.
- **Security**: Uses `helmet` for setting various HTTP headers to secure the app and `cors` for handling Cross-Origin Resource Sharing.
- **Environment-based Configuration**: Uses `.env` files for easy configuration.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd kuron-gateway
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project by copying the example file:

```bash
cp .env.example .env
```

Now, open the `.env` file and set the required variables:

```
# The port the gateway will run on
PORT=5000

# The target URL for the downstream service (e.g., your PayloadCMS backend)
PAYLOAD_URL=http://localhost:3000
```

## Available Scripts

- **`yarn dev`**: Starts the gateway in development mode with `ts-node`. The server will restart automatically on file changes.
- **`yarn build`**: Compiles the TypeScript code to JavaScript in the `dist/` directory.
- **`yarn start`**: Starts the gateway in production mode from the compiled code in the `dist/` directory.

## API Endpoints

The gateway exposes the following base paths, which are then proxied to the `PAYLOAD_URL`:

- **REST API**: `/api/r/*`
  - Requests to this path are forwarded to the `/api/*` endpoint of the target service.
  - Example: A request to `/api/r/posts` will be proxied to `{PAYLOAD_URL}/api/posts`.

- **GraphQL API**: `/api/g`
  - Requests to this path are forwarded to the `/api/graphql` endpoint of the target service.

## Core Dependencies

- **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)**: The middleware used for proxying requests.
- **[cors](https://github.com/expressjs/cors)**: Middleware for enabling CORS.
- **[helmet](https://helmetjs.github.io/)**: Helps secure Express apps by setting various HTTP headers.
- **[express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)**: Basic rate-limiting middleware.
- **[dotenv](https://github.com/motdotla/dotenv)**: Loads environment variables from a `.env` file.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset of JavaScript that adds static types.

(ending readme)
