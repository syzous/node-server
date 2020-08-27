var http = require("http");
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "database-1.chmtmcyvielh.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "Ngitest0",
  database: "studentDB",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from student", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World 2");
  })
  .listen(8080);
