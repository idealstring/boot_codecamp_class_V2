# FROM ubuntu:22.04
# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

# : 뒤는 버전
# 이미 위 과정을 한 번에 받을 수 있도록 누군가 도커파일을 만들어 둠
# https://hub.docker.com/_/node

FROM node:14

# COPY 복사
# . 모든파일을
# /도커위치/

# RUN mkdir class_build => 아래서 카피할 때 해당 위치에 폴더가 없으면 새로 생성하고 넣음.
COPY . /class_build/
# WORKDIR(working directory). 해당 폴더에 커서를 깜빡거리게 해달라.
# 복사하고 yarn install하는 이유는 node 버전이 다를 수 있기 때문. 이는 도커 노드 버전으로 통일 필요하기 때문.
WORKDIR /class_build/
# 해당 폴더에서 node_modules 추가. 빌드. 시작.
RUN yarn install
RUN yarn build
CMD yarn start

# RUN은 처음 실행할 때 실행하고 나머지는 이미지(CD이미지파일같이)로 저장.
# CMD yarn start => RUN 대신 CMD도 가능하나, 한 번만 쓸 수 있다. CMD는 저장되지 않고 매번 실행한다.