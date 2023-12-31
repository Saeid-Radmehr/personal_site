FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
