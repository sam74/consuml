FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .



ENV CONSUL_METRICS_URL=
ENV PUML_SERVICE_URL=
ENV CONSUML_DEBUG_ENABLE=false

EXPOSE 3000

VOLUME /usr/src/app/uml


CMD ["node", "server.js"]