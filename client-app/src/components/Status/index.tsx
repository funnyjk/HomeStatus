import React, { useContext, useEffect, useState } from 'react';
import { UserType } from "../../../../server/server";
import SocketContext from "../../hooks/useSocketContext";
import './styles.css';

interface IStatus {
  id: number;
  user: UserType;
}

const Status = ({id, user}: IStatus) => {
  const socket = useContext(SocketContext);
  const {name, status} = user;

  const [currentStatus, setCurrentStatus] = useState(false);
  useEffect(()=> {
    switch (status) {
      case 'Available':
        setCurrentStatus(true);
        return;
      case 'Busy':
        setCurrentStatus(false);
        return;
      default:
        return;
    }
  }, [status]);

  const updateStatus = (newStatus: string) => {
    socket.emit('updateStatus', id, {
      name,
      status: newStatus
    })
  };

  const handleClick = () => {
    const newStatus = (!currentStatus)? 'Available' : 'Busy';
    updateStatus(newStatus)
  };

  const handleBlur = ({target}: any) => {
    const {value} = target;
    updateStatus(value);
  };

  return <div className={`status status--${status}`} onClick={handleClick}>
    {name}
  </div>
};

export default Status;