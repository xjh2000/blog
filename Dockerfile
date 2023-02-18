FROM node:lts as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-bullseye-slim as app
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist .
EXPOSE 8080
CMD [ "node", "main.js" ]
