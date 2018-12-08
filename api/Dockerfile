FROM node:9-alpine

RUN mkdir /api

WORKDIR /api

COPY . /api
RUN npm install

CMD ["npm", "start"]