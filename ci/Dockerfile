FROM node:12.18.1-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install pnpm -g
RUN npm install
COPY . .
