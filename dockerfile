FROM node:10.21.0-alpine3.9

RUN mkdir -p /src/app

COPY . /src/app

WORKDIR /src/app/client

RUN npm install

WORKDIR /src/app/server

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]