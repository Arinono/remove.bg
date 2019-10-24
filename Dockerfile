FROM node:latest

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

ENTRYPOINT  ["node", "/app/src/index.js"]
