FROM node:12-alpine

WORKDIR /home/node

COPY package.json /home/node/
COPY yarn.lock /home/node/
COPY main.js /home/node/

RUN yarn install

CMD ["node", "main.js"]