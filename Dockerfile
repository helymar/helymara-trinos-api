FROM node:current-alpine3.12

ENV NODE_ENV=production

WORKDIR /usr/src/app

EXPOSE 3000

RUN apt update && apt install -y python make g++

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
