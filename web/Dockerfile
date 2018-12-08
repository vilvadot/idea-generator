FROM node:9-alpine

RUN mkdir /web

WORKDIR /web

COPY . /web
RUN npm install

ENV NODE_ENV development

CMD ["npm", "start"]