# Create image based off of the official Node 6 image
FROM node:6.9.2-alpine

RUN set -ex \
    && apk update \
    && apk add --no-cache git

WORKDIR /home

ARG commithash=#f8068035cf77059b4fcb26450d16c4296a4006d2
RUN git clone https://github.com/adouglas/cloud-christian-angular-bibletrends.git

WORKDIR /home/cloud-christian-angular-bibletrends/Source/app

# Install dependecies
RUN npm install

# Install dependecies
RUN npm build

# Create a directory where our app will be placed
RUN mkdir -p /usr/src && cp dist/ /usr/src/app/

# Change directory so that our commands run inside this new dir
WORKDIR /usr/src/app
