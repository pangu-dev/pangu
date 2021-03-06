import { Server } from "http";
import { Server as HttpsServer } from "https";
import WebSocket from "ws";
import queryString from "query-string";
import logger from "../config/logger";

export const applyWs = (server: Server | HttpsServer) => {
  const websocketServer = new WebSocket.Server({
    noServer: true,
    path: "/ws",
  });

  server.on("upgrade", (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit("connection", websocket, request);
    });
  });

  websocketServer.on(
    "connection",
    function connection(websocketConnection, connectionRequest) {
      // @ts-ignore
      const [path, params] = connectionRequest?.url?.split("?");
      const connectionParams = queryString.parse(params);

      // NOTE: connectParams are not used here but good to understand how to get
      // to them if you need to pass data with the connection to identify it (e.g., a userId).
      logger.info(connectionParams);

      websocketConnection.on("message", (message: string) => {
        try {
          const parsedMessage = JSON.parse(message);
          logger.info(parsedMessage);
        } catch (e) {
          logger.error(e);
        }
      });
    }
  );

  return websocketServer;
};
