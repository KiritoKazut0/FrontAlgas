import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { endPointSocket } from "../Utils/credentials";

export const WebsocketContext = createContext();

export const WebsocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [dataSensors, setDataSensors] = useState({});

    useEffect(() => {

        const socketIo = io(endPointSocket);

        socketIo.on("connect", () => {
            console.log("Conectado al servidor websocket");
        });

        socketIo.on("graphics", (data) => {
            // console.log(data);
            
            setDataSensors(data);
        });

        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        };
    }, []);

    const value = {
        dataSensors,
        setDataSensors,
    };

    return (
        <WebsocketContext.Provider value={value}>
            {children}
        </WebsocketContext.Provider>
    );
};