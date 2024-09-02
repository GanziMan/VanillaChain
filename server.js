const express = require("express");
const path = require("path");
const app = express();

// 모든 요청에 대해 index.html 파일을 반환합니다.
app.use("/static", express.static(path.resolve(__dirname, "src", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

// 5060 포트에서 서버를 실행합니다.
app.listen(4000, () => console.log("Server running on port 5060"));
