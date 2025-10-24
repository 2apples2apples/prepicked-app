# ----------------------------
# 🧱 Base build layer
# ----------------------------
FROM oven/bun:1 AS base

WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy dependency manifests first for caching
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# ----------------------------
# 🚀 Release (production) layer
# ----------------------------
FROM oven/bun:1 AS release

WORKDIR /usr/src/app

# Copy node_modules from base layer
COPY --from=base /usr/src/app/node_modules ./node_modules

# Copy rest of the app
COPY . .

# Environment variables
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=sk_test_ZFp4DzJEHckImgnIZThfmdCj7bkdiW8sGR04lbPcr8

# Disable Next telemetry and lint during Docker build
ENV NEXT_TELEMETRY_DISABLED=1

# ✅ Build the app (no lint, telemetry disabled via env)
RUN bun --bun run next build --no-lint

# Expose app port
EXPOSE 3000

# Start production server
CMD ["bun", "--bun", "run", "start"]
