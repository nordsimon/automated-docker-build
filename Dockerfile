FROM node:7.4.0

ADD index.js .

EXPOSE 8000

CMD node index.js
