# ----------------------------
# 🧱 Base build layer
# ----------------------------
FROM node:20 AS base

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY package.json ./
RUN npm install

# ----------------------------
# 🚀 Release (production) layer
# ----------------------------
FROM node:20 AS release

WORKDIR /usr/src/app
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY . .

# Environment variables
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=sk_test_ZFp4DzJEHckImgnIZThfmdCj7bkdiW8sGR04lbPcr8
ENV NEXT_TELEMETRY_DISABLED=1

# Build the app
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]


# ----------------------------
# 🧑‍💻 Development layer
# ----------------------------
FROM node:20 AS dev

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

ENV NODE_ENV=development
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING_INTERVAL=1000
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000
CMD ["npm", "run", "dev"]
