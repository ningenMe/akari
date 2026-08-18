# App port on the shared app-platform EC2 instance. Must match the
# CloudFront origin port configured for akari-front in infra-terraform.
ARG APP_PORT=3001

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
ARG APP_PORT
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=${APP_PORT}
# Next's standalone server.js binds to $HOSTNAME if set. Docker sets
# HOSTNAME to the container ID by default, which made the server bind only
# to the container's internal IP instead of all interfaces - unreachable
# from outside despite the container appearing healthy. Force it to listen
# on every interface.
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE ${APP_PORT}

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "\
    const req = require('http').get('http://127.0.0.1:'+process.env.PORT+'/', (res) => { \
      res.resume(); \
      process.exit(res.statusCode === 200 ? 0 : 1); \
    }); \
    req.on('error', () => process.exit(1));"

CMD ["node", "server.js"]
