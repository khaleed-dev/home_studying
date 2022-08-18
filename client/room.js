// ES6 import or TypeScript
import { io } from "socket.io-client";

const production = process.env.NODE_ENV === "production"
const clientUrl = production ? "realsite.com" : "http://localhost:3000"

const socket = io(clientUrl);
console.log(socket)