# FROM node:8.11.4-alpine
# COPY . /app
# WORKDIR /app
# RUN npm install
# CMD npm run start
# EXPOSE 3000
FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash && \ 
    apt-get update && \
    apt-get install -y nodejs
COPY . /app
WORKDIR /app
RUN npm install
CMD npm run start
EXPOSE 3000