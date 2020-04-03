import React, { useContext, useEffect, useState } from 'react';
import SocketContext from "../../hooks/useSocketContext";

interface INumber {

}

const Number = ({}: INumber) => {
  const socket = useContext(SocketContext);

  const [number, setNumber] = useState(0);

  const updateNumber = (value: number) => {
    socket.emit('updateNumber', number + value);
  }
  const updateSocket = () => {
    socket.on('update', (res: number) => {
      setNumber(res);
      console.log(res);
    })
  };

  useEffect(() => {
    updateSocket();
  }, []);

  return <div>
    {number}
    <button onClick={()=>updateNumber(-1)}>-1</button>
    <button onClick={()=>updateNumber(1)}>+1</button>
  </div>
};

export default Number;