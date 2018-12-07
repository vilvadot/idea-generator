FROM node:9-alpine

RUN mkdir /api

WORKDIR /api

COPY . /api
RUN npm install

ENV NODE_ENV development

CMD ["npm", "start"]