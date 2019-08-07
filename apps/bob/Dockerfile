FROM node:10.13-alpine

# Environment
WORKDIR /home/app2/
ENV NODE_ENV=production

# Dependencies
COPY package.json /home/app2/
COPY . /home/app2/

RUN yarn install

# Build

RUN cd packages/bob && yarn build
EXPOSE 3000
CMD yarn workspace bob start