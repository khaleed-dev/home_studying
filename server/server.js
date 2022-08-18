const production = process.env.NODE_ENV === "production"
const clientUrl = production ? "realsite.com" : "http://localhost:1234"
const options = { 
    cors: {
        origin: clientUrl
      }
 };
const io = require("socket.io")(3000, options);

io.on("connection", socket => { console.log('here') }); 