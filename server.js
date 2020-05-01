const express = require("express");
const routing = express();
const http = require("http");
const socket = require("socket.io");
app = http.Server(routing);
const io = socket(app);

routing.get("/", (req, res) => {
  //   res.end("hello");
  res.sendFile(__dirname + "/" + "index.html");
});

io.on("connect", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit('chat message', msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.listen(3001, function () {
  console.log("port 3001");
});
