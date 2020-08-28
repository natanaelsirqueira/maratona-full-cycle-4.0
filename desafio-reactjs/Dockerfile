FROM node:12

RUN npm i -g serve

WORKDIR "/usr/src/app"

COPY build/ .

EXPOSE 3000

CMD [ "serve", "-s", ".", "-l", "3000" ]
