FROM node:16-alpine3.14
WORKDIR /server
COPY . /server
RUN npm install  -silent
EXPOSE  80
CMD ["npm","run","api"]