let io = require("socket.io")(4000);

let number = 10;

export interface UserType {
  name: string;
  status: string;
}

let APP_STATUS: Array<UserType> = [{
  name: "Scott",
  status: "Available"
}, {
  name: "Carly",
  status: "Available"
}, {
  name: "David",
  status: "Available"
}, {
  name: "Rhonda",
  status: "Available"
}];

io.on("connection", (socket: any) => {
  socket.emit('statusInit', APP_STATUS);
  socket.emit('update', number);

  socket.on("updateNumber", (newNumber: number) => {
    number = newNumber;
    console.log(newNumber);
    io.emit('update', number);
  });

  socket.on('updateStatus', (id: number, newStatus: UserType) => {
    APP_STATUS = [...APP_STATUS.slice(0, id), newStatus, ...APP_STATUS.slice(id + 1)];
    io.emit("statusInit", APP_STATUS);
  })
});
