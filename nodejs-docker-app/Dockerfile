# 베이스 이미지를 명시해준다.
FROM node:10

# 이미지 안에서 어플리케이션 소스코드를 갖고있을 디렉토리 생성
# 디렉토리가 어플리케이션에 working directory가 된다.
WORKDIR /usr/src/app

# 컨테이너에 package.json을 컨테이너 안에 ./위치에 넣는다
COPY package.json ./

# 컨테이너에 server.js 를 컨테이너안에 ./ 위치에 넣는다.
# COPY server.js ./

# 컨테이너에 현재 폴더에 있는모든 파일을 컨테이너 안에 ./ 위치에 넣는다.
# COPY ./ ./

# 추가적으로 필요한 파일들을 다운로드 받는다
# npm install은 Package.json 에 있는 dependency에 정해준 모듈을 다운로드 받아 준다.
RUN npm install

# 컨테이너에 현재 폴더에 있는모든 파일을 컨테이너 안에 ./ 위치에 넣는다.
COPY ./ ./

# 컨테이너 시작시 실행 될 명령어를 명시해 준다.
CMD ["node","server.js"]
