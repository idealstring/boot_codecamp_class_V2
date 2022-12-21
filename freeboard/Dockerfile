FROM node:16


COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
WORKDIR /class_build/
RUN yarn install

COPY . /class_build/
RUN yarn build
CMD yarn start