"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsedmessage = JSON.parse(message);
        if (parsedmessage.type === "join") {
            allSockets.push({
                socket,
                roomId: parsedmessage.payload.roomId,
            });
        }
        if (parsedmessage.type === "chat") {
            //@ts-ignore
            const roomId = allSockets.find((s) => s.socket == socket).roomId;
            allSockets
                .filter((s) => s.roomId === roomId)
                .forEach((s) => {
                s.socket.send(parsedmessage.payload.message);
            });
        }
    });
});
