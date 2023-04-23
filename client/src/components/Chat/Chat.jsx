import React from "react";
import MessageBlock from "./components/MessageBlock";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

import "./chat.scss";

export default function Chat({ socket }) {
  const [messages, setMessages] = React.useState([]);
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    socket.on("responseTyping", (data) => {
      setStatus(data);
      setTimeout(() => {
        setStatus("");
      }, 2000);
    });
  }, [socket]);

  React.useEffect(() => {
    socket.on("response", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  return (
    <div className="chat">
      <Sidebar socket={socket} />
      <main className="main">
        <Body messages={messages} status={status} />
        <MessageBlock socket={socket} />
      </main>
    </div>
  );
}
