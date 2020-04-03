import React, { useContext, useEffect, useState } from 'react';
import SocketContext from "../../hooks/useSocketContext";
import Status from "../Status";
import './styles.css';
interface IStatusList {

}

const StatusList = ({}: IStatusList) => {
  const [statusList, setStatusList] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on('statusInit', (res: any) => {
      setStatusList(res);
    })
  }, []);

  return <div className={'status-list'}>
    {statusList.map((user, ind) => {
      return <Status id={ind} user={user}/>
    })}
  </div>
};

export default StatusList;