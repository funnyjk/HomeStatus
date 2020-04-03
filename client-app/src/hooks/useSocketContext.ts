import io from "socket.io-client";
import { createContext } from "react";

const useSocketContext = createContext(io('192.168.1.51:4000'));

export default useSocketContext;

