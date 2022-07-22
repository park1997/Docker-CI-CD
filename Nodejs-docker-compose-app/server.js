//레디스 클라이언트 생성 
// redis client 생성
// 보통 도커를 사용하지 않는 환경에서는 Redis 서버가 작동되고 있는 곳의 host 옵션을
// "https://redis-server.com" 로 주면 되지만, docker-compose를 사용할 때는
// host 옵션을 docker-compose.yml 파일에 명시한 컨테이너 이름으로 주면된다. 
const express = require("express");

const redis = require("redis");



//레디스 클라이언트 생성 

const client = redis.createClient({

socket: {

host: "redis-server",

port: 6379

}

});



const app = express();



app.get('/', async (req, res) => {

await client.connect();

let number = await client.get('number');

if (number === null) {

number = 0;

}

console.log('Number: ' + number);

res.send("숫자가 1씩 올라갑니다. 숫자: " + number)

await client.set("number", parseInt(number) + 1)

await client.disconnect();;;

})




app.listen(8080);

console.log('Server is running');