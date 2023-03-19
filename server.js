const Hbs = require("express-handlebars");
const express = require("express");
const path = require("path");
const app = express();
const cal = require("./calculator.js");

app.engine('hbs', Hbs.engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.listen(8080);

app.get('/', function(req, res){
  res.render('home', {showTitle: true});
});

app.get("/calculator", (req, res) => {
  const soA = Number(req.query.soA);
  const soB = Number(req.query.soB);
  const operator = req.query.operator;
  // const kq = req.query.result;

  switch (operator) {
    case "cong":
      // res.render(`Tong cua ${soA} va ${soB} bang: ${cal.add(soA, soB)}`);
      // kq = `Tong cua ${soA} va ${soB} bang: ${cal.add(soA, soB)}`;
      res.render('home', {layout: "main",kq: `Tong cua ${soA} va ${soB} bang: ${cal.add(soA, soB)}`, so_a: soA, so_b: soB, showContent: true, showTitle: false});
      break;
    case "tru":
      // res.render(`Hieu cua ${soA} va ${soB} bang: ${cal.sub(soA, soB)}`);
      // kq = `Hieu cua ${soA} va ${soB} bang: ${cal.sub(soA, soB)}`;
      res.render('home', {layout: "main",kq: `Hieu cua ${soA} va ${soB} bang: ${cal.sub(soA, soB)}`, so_a: soA, so_b: soB, showContent: true, showTitle: false});
      break;
    case "nhan":
      // res.render(`Tich cua ${soA} va ${soB} bang: ${cal.mul(soA, soB)}`);
      // kq = `Tich cua ${soA} va ${soB} bang: ${cal.mul(soA, soB)}`
      res.render('home', {layout: "main",kq: `Hieu cua ${soA} va ${soB} bang: ${cal.sub(soA, soB)}`, so_a: soA, so_b: soB, showContent: true, showTitle: false});
      break;
    case "chia":
      // res.render(`Thuong cua ${soA} va ${soB} bang: ${cal.div(soA, soB)}`);
      // kq = `Thuong cua ${soA} va ${soB} bang: ${cal.div(soA, soB)}`
      res.render('home', {layout: "main",kq: `Thuong cua ${soA} va ${soB} bang: ${cal.div(soA, soB)}`, so_a: soA, so_b: soB, showContent: true, showTitle: false});
      break;
  }
});