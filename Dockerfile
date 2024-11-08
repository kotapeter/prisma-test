FROM node:20-alpine

ARG DATABASE_URL

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run yo

CMD ["npx", "ts-node", "index.ts"]
