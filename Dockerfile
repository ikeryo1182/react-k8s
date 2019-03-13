# stage 1: build environment
FROM node:latest as node
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn install
COPY . /usr/src/app
RUN yarn --version
RUN yarn run build

# stage 2: production environment
FROM nginx:alpine
COPY --from=node /usr/src/app/dist /usr/share/nginx/html