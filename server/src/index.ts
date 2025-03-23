import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface Users {
  socket: WebSocket;
  roomId: string;
}

let allSockets: Users[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedmessage = JSON.parse(message as unknown as string);

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
