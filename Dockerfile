FROM node:lts as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set registry=https://registry.npmmirror.com && npm install
COPY . .
RUN npm run build

FROM node:lts as depend
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set registry=https://registry.npmmirror.com && npm install --production

FROM node:lts-bullseye-slim as app
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY --from=builder /usr/src/app/dist .
COPY --from=depend /usr/src/app/node_modules ./node_modules
EXPOSE 8080
CMD [ "node", "main.js" ]
