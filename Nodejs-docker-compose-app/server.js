const express = require("express");
const redis = require("Redis");

// redis client 생성
// 보통 도커를 사용하지 않는 환경에서는 Redis 서버가 작동되고 있는 곳의 host 옵션을
// "https://redis-server.com" 로 주면 되지만, docker-compose를 사용할 때는
// host 옵션을 docker-compose.yml 파일에 명시한 컨테이너 이름으로 주면된다. 
const client = redis.createClient({
    host : "redis-server",
    port : 6379  // redis 의 기본 port
});





const app = express();

// 숫자는 0 부터 시작합니다.
client.set("number",0);

app.get("/", (req, res) => {
    client("number", (err, number) => {
        // 현재 숫자를 가져온 후에 1씩 올려줍니다.
        client.set("number", parseInt(number) + 1);
        res.send("숫자가 1씩 올라갑니다. 숫자 : " + number);
    });
});


app.listen(8080);
console.log("Server is Running");
