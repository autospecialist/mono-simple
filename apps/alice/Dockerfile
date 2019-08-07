FROM node:10.13-alpine

# Environment

WORKDIR /home/app1/
ENV NODE_ENV=production

# Dependencies

COPY package.json /home/app1/
# COPY package-lock.json /home/app/
COPY . /home/app1/

RUN yarn install

# Build

# RUN cd packages/alice && yarn build
EXPOSE 3000
CMD yarn workspace alice start

