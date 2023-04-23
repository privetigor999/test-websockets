const express = require("express");
const app = express();
const PORT = 3001;

const http = require("http").Server(app);
const cors = require("cors");
const socketIo = require("socket.io")(http, {
  cors: {
    origin: `http://localhost:5173`,
  },
});

app.get("api", (req, res) => {
  res.json({
    message: "Hello",
  });
});

const users = [];

socketIo.on("connection", (socket) => {
  console.log(`${socket.id} user connected`);
  socket.on("message", (data) => {
    socketIo.emit("response", data);
  });
  socket.on("newUser", (data) => {
    users.push(data);
    socketIo.emit("responseNewUser", users);
  });
  socket.on("typing", (data) => {
    socket.broadcast.emit("responseTyping", data);
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} user disconnected`);
  });
});

http.listen(PORT, () => {
  console.log("server started");
});
