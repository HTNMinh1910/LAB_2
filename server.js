const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cal = require("./caculator.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get("/calculator", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", (req, res) => {
  const soA = Number(req.body.soA);
  const soB = Number(req.body.soB);
  const operator = req.body.operator;
  const kq = req.body.kq;

  switch (operator) {
    case "cong":
      res.write(`Tong cua ${soA} va ${soB} bang: ${cal.add(soA, soB)}`);
      break;
    case "tru":
      res.write(`Hieu cua ${soA} va ${soB} bang: ${cal.sub(soA, soB)}`);
      break;
    case "nhan":
      res.write(`Tich cua ${soA} va ${soB} bang: ${cal.mul(soA, soB)}`);
      break;
    case "chia":
      res.write(`Thuong cua ${soA} va ${soB} bang: ${cal.div(soA, soB)}`);
      break;
  }
});

app.listen(8080);