FROM node:16-alpine3.14
WORKDIR /msw
COPY . /msw
RUN npm install
RUN npm run build 
RUN npm install -g serve
EXPOSE  80
CMD ["server", "-s", "build", "-l" ,"80"]