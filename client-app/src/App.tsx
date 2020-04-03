import React, {useContext} from 'react';
import './App.css';
import SocketContext from "./hooks/useSocketContext";
import Number from "./components/Number";
import StatusList from "./components/StatusList";

function App() {
  const context = useContext(SocketContext);
  return <SocketContext.Provider value={context}>
      {/*<Number/>*/}
      <StatusList/>
  </SocketContext.Provider>
}

export default App;
