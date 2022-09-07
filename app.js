const express = require("express"); // access
const socket = require("socket.io");

const app = express(); // initialize ho jyegi

app.use(express.static("public"));

let port = 5000;
let server = app.listen(port, () => {
    console.log("Listening to port" + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");

    // Received data
    socket.on("beginPath", (data) => {
        // data from frontend
        // now transfer to data to all to all connected computer Transfer
        io.sockets.emit("beginPath", data);
    })

    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })

    socket.on("redoUndo", (data) => {
        io.socket.emit("redoUndo", data);
    })
})

