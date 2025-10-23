FROM oven/bun:1 AS base

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile


FROM oven/bun:1 AS release

COPY --from=base /usr/src/app/node_modules node_modules

COPY . .
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=sk_test_ZFp4DzJEHckImgnIZThfmdCj7bkdiW8sGR04lbPcr8

RUN bun --bun run build

CMD bun --bun run start

EXPOSE 3000
