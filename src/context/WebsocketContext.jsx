import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const WebsocketContext = createContext();

export const WebsocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [dataSensors, setDataSensors] = useState({});

    useEffect(() => {
         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2RhNGZiNTRmYjQwZDRlZGFhZmQ0NyIsInN1Y2Nlc3MiOnRydWUsImlhdCI6MTczMjIwNTUzOSwiZXhwIjoxNzMyMjA5MTM5fQ.H3Nz0r_K6NUv6w1kNedP3i_1dNjhiUCDQ3SWBXe9pLQ'

        const socketIo = io("https://h2biocontrolapi.integrador.xyz/", {
             extraHeaders:{
                'authorization': token
             }
        });

        socketIo.on("connect", () => {
            console.log("Conectado al servidor websocket");
        });

        socketIo.on("graphics", (data) => {
            console.log("Datos recibidos:", data);
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