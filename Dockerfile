FROM node:7.8-alpine

COPY package.json /www/package.json
RUN cd /www; npm install

COPY . /www
WORKDIR /www

ENV PORT 3030

CMD ["npm", "start"]
