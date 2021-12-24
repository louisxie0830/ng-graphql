FROM node:14-alpine as builder

# ARG-defined
ARG DEPLOY_ENV=sit

# Create app directory
WORKDIR /app
# RUN apt-get update && apt-get install git python make build-essential -y

RUN npm install -g node-pre-gyp node-gyp @angular/cli@13.1.2

# Remove package-lock.json
RUN rm -f package-lock.json
RUN rm -rf dist

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./
ENV NPM_CONFIG_LOGLEVEL error

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# build app for production with minification
RUN npm run build


FROM nginx:alpine
#replace default virtual host config
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html
EXPOSE 8080
