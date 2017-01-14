FROM alpine:3.3

RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories
RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories

RUN set -ex \
    && apk update \
    && apk add musl \
    && apk add busybox \
    && apk add ncurses-libs readline \
    && apk add bash \
    && apk add --no-cache curl nodejs git

RUN npm install --global elasticsearch-tools

WORKDIR /home

RUN git clone https://github.com/adouglas/elastic-bibles.git

COPY import-data.sh ./
RUN chmod +x import-data.sh

CMD /home/import-data.sh
