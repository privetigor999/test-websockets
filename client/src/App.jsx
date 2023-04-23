import { Route, Routes } from "react-router-dom";
import socketIO from "socket.io-client";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";

const socket = socketIO.connect("http://localhost:3001");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />} />
      <Route path="/chat" element={<Chat socket={socket} />} />
    </Routes>
  );
}

export default App;
