FROM node:lts as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:lts-bullseye-slim as app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]